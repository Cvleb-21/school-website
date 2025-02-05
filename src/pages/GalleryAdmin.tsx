import React, { useState, useRef } from 'react';
import { Upload, X, Image as ImageIcon, Loader2 } from 'lucide-react';
import { imageStorage, type ImageMetadata } from '../services/imageStorage';

interface ImageUpload {
  file: File;
  preview: string;
  title: string;
  category: string;
}

const categories = ['Campus', 'Facilities', 'Events', 'Campus Life'];

export default function GalleryAdmin() {
  const [uploads, setUploads] = useState<ImageUpload[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const newUploads: ImageUpload[] = Array.from(files).map(file => ({
      file,
      preview: URL.createObjectURL(file),
      title: '',
      category: categories[0]
    }));

    setUploads(prev => [...prev, ...newUploads]);
  };

  const handleRemoveUpload = (index: number) => {
    URL.revokeObjectURL(uploads[index].preview);
    setUploads(prev => prev.filter((_, i) => i !== index));
  };

  const handleTitleChange = (index: number, title: string) => {
    setUploads(prev => prev.map((upload, i) => 
      i === index ? { ...upload, title } : upload
    ));
  };

  const handleCategoryChange = (index: number, category: string) => {
    setUploads(prev => prev.map((upload, i) => 
      i === index ? { ...upload, category } : upload
    ));
  };

  const handleUpload = async () => {
    setIsUploading(true);
    setUploadStatus('idle');
    
    try {
      // Upload each file
      await Promise.all(uploads.map(async (upload) => {
        const metadata: ImageMetadata = {
          title: upload.title,
          category: upload.category,
          uploadDate: new Date()
        };
        
        await imageStorage.saveImage(upload.file, metadata);
      }));

      setUploadStatus('success');
      setUploads([]);
      
      // Reset success message after 3 seconds
      setTimeout(() => setUploadStatus('idle'), 3000);
    } catch (error) {
      console.error('Upload failed:', error);
      setUploadStatus('error');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Gallery Admin</h1>

          {/* Upload Area */}
          <div
            className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center cursor-pointer hover:border-indigo-500 transition-colors"
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              multiple
              accept="image/*"
              onChange={handleFileSelect}
            />
            <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-xl font-medium text-gray-700 mb-2">Drop images here</p>
            <p className="text-sm text-gray-500">or click to select files</p>
            <p className="text-sm text-gray-500 mt-2">Files will be saved to /images folder</p>
          </div>

          {/* Upload List */}
          {uploads.length > 0 && (
            <div className="mt-8 space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Selected Images</h2>
              {uploads.map((upload, index) => (
                <div key={index} className="flex items-start space-x-4 bg-gray-50 p-4 rounded-lg">
                  <div className="w-24 h-24 flex-shrink-0">
                    <img
                      src={upload.preview}
                      alt="Preview"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-grow space-y-4">
                    <input
                      type="text"
                      placeholder="Image title"
                      value={upload.title}
                      onChange={(e) => handleTitleChange(index, e.target.value)}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                    <select
                      value={upload.category}
                      onChange={(e) => handleCategoryChange(index, e.target.value)}
                      className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    onClick={() => handleRemoveUpload(index)}
                    className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              ))}

              <div className="flex flex-col items-end gap-4 mt-6">
                {uploadStatus === 'success' && (
                  <div className="text-green-600">
                    Images successfully uploaded to /images folder!
                  </div>
                )}
                {uploadStatus === 'error' && (
                  <div className="text-red-600">
                    Failed to upload images. Please try again.
                  </div>
                )}
                <button
                  onClick={handleUpload}
                  disabled={isUploading || uploads.some(u => !u.title)}
                  className={`flex items-center px-6 py-3 rounded-lg text-white font-semibold ${
                    isUploading || uploads.some(u => !u.title)
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-indigo-600 hover:bg-indigo-700'
                  }`}
                >
                  {isUploading ? (
                    <>
                      <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5" />
                      Uploading...
                    </>
                  ) : (
                    <>
                      <ImageIcon className="mr-2 h-5 w-5" />
                      Upload Images
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}