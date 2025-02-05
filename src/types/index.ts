export interface NavItem {
  title: string;
  href: string;
}

export interface StaffMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  content: string;
  imageUrl?: string;
}