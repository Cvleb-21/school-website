// Simulated file storage service
class ImageStorage {
  private static instance: ImageStorage;
  private images: Map<string, { file: File; metadata: ImageMetadata }>;

  private constructor() {
    this.images = new Map();
  }

  public static getInstance(): ImageStorage {
    if (!ImageStorage.instance) {
      ImageStorage.instance = new ImageStorage();
    }
    return ImageStorage.instance;
  }

  async saveImage(file: File, metadata: ImageMetadata): Promise<string> {
    const id = `${Date.now()}-${file.name}`;
    const path = `images/${id}`;
    
    // In a real application, this would save to a server
    this.images.set(path, { file, metadata });
    
    return path;
  }

  async getAllImages(): Promise<Array<{ path: string; metadata: ImageMetadata }>> {
    return Array.from(this.images.entries()).map(([path, { metadata }]) => ({
      path,
      metadata
    }));
  }
}

export interface ImageMetadata {
  title: string;
  category: string;
  uploadDate: Date;
}

export const imageStorage = ImageStorage.getInstance();