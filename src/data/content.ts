import type { EventItem, Program, ResourceItem } from '../types';
export const programs: Program[] = [
 { id:'leadership', title:'Youth Leadership Labs', summary:'Mentorship, civic leadership, confidence building and peer-led community projects.', imageLabel:'UPLOAD PROGRAM IMAGE: Leadership Lab', status:'published', category:'Leadership' },
 { id:'digital', title:'Digital Skills Bootcamp', summary:'Practical technology, online safety, creative media and career readiness workshops.', imageLabel:'UPLOAD PROGRAM IMAGE: Digital Skills', status:'published', category:'Education' },
 { id:'wellbeing', title:'Teen Wellbeing Circles', summary:'Safe spaces for mental health awareness, life skills and trusted support networks.', imageLabel:'UPLOAD PROGRAM IMAGE: Wellbeing Circle', status:'published', category:'Wellbeing' }
];
export const events: EventItem[] = [
 { id:'summit', title:'Africa Teen Changemakers Summit', date:'2026-09-12', location:'Hybrid / Accra', status:'upcoming', capacity:300 },
 { id:'cleanup', title:'Community Service Day', date:'2026-10-04', location:'Local chapters', status:'upcoming', capacity:120 },
 { id:'mentor', title:'Mentor Orientation', date:'2026-06-05', location:'Online', status:'past' }
];
export const resources: ResourceItem[] = [
 { id:'handbook', title:'Volunteer Handbook', type:'PDF', audience:'volunteers' },
 { id:'blueprint', title:'Operational Blueprint', type:'PDF', audience:'volunteers' },
 { id:'training', title:'Safeguarding Training Deck', type:'PowerPoint', audience:'volunteers' }
];
export const stats = [{label:'Teens reached', value:'12k+'},{label:'Countries represented', value:'18'},{label:'Volunteer mentors', value:'450+'},{label:'Programs delivered', value:'80+'}];
