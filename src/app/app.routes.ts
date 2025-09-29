import { Routes } from '@angular/router'; 
 
export const routes: Routes = [ 
  { 
    path: '', 
    redirectTo: 'folder/id', 
    pathMatch: 'full', 
  }, 
  {path: 'folder/:id', 
loadComponent: () => 
import('./folder/folder.page').then((m) => m.FolderPage), 
}, 
{ 
path: 'home', 
loadComponent: () => import('./home/home.page').then( m => m.HomePage) 
},   {
    path: 'the-school',
    loadComponent: () => import('./pages/the-school/the-school.page').then( m => m.TheSchoolPage)
  },
  {
    path: 'administration',
    loadComponent: () => import('./pages/administration/administration.page').then( m => m.AdministrationPage)
  },
  {
    path: 'academics',
    loadComponent: () => import('./pages/academics/academics.page').then( m => m.AcademicsPage)
  },
  {
    path: 'faculty',
    loadComponent: () => import('./pages/faculty/faculty.page').then( m => m.FacultyPage)
  },
  {
    path: 'students',
    loadComponent: () => import('./pages/students/students.page').then( m => m.StudentsPage)
  },
  {
    path: 'rie',
    loadComponent: () => import('./pages/rie/rie.page').then( m => m.RiePage)
  },
  {
    path: 'library',
    loadComponent: () => import('./pages/library/library.page').then( m => m.LibraryPage)
  },
  {
    path: 'alumni',
    loadComponent: () => import('./pages/alumni/alumni.page').then( m => m.AlumniPage)
  },
  {
    path: 'campuses',
    loadComponent: () => import('./pages/campuses/campuses.page').then( m => m.CampusesPage)
  },

]; 