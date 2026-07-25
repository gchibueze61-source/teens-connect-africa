export type Role = 'public' | 'pending' | 'volunteer' | 'founder';
export type PublishStatus = 'draft' | 'published' | 'archived';
export interface UserProfile { uid: string; email: string; displayName: string; role: Role; approved: boolean; photoURL?: string; createdAt: string; }
export interface Program { id: string; title: string; summary: string; imageLabel: string; status: PublishStatus; category: string; }
export interface EventItem { id: string; title: string; date: string; location: string; status: 'upcoming' | 'past'; capacity?: number; }
export interface ResourceItem { id: string; title: string; type: 'PDF'|'Word'|'Excel'|'PowerPoint'|'Image'|'Video'; audience: 'volunteers'|'founders'; }
