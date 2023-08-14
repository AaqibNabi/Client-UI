import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';

const routes: Routes = [
    {path:'',redirectTo:'authentication',pathMatch:'full'},
    {
        path: 'authentication',
        component: AuthLayoutComponent,
        loadChildren:()=> import('./authentication/authentication.module').then(m => m.AuthenticationModule)
    },
    {
        path: 'employer',
        component: MainLayoutComponent,
        loadChildren:()=> import('./employer/employer.module').then(m => m.EmployerModule)
    },
    {
        path: 'employee',
        component: MainLayoutComponent,
        loadChildren:()=> import('./employee/employee.module').then(m => m.EmployeeModule)
    }
    // {path: '', component: MainHomeComponent},
    // {path: 'about', component: AboutPageComponent},
    // {path: 'job-listings', component: JobListingsPageComponent},
    // {path: 'job-details', component: JobDetailsPageComponent},
    // {path: 'post-a-job', component: PostAJobPageComponent},
    // {path: 'companies', component: CompaniesPageComponent},
    // {path: 'company-details', component: CompanyDetailsPageComponent},
    // {path: 'pricing', component: PricingPageComponent},
    // {path: 'categories', component: CategoriesPageComponent},
    // {path: 'candidates', component: CandidatesPageComponent},
    // {path: 'candidate-details', component: CandidateDetailsPageComponent},
    // {path: 'faq', component: FaqPageComponent},
    // {path: 'privacy-policy', component: PrivacyPolicyPageComponent},
    // {path: 'terms-conditions', component: TermsConditionsPageComponent},
    // {path: 'profile-authentication', component: MyAccountPageComponent},
    // {path: 'blog', component: BlogPageComponent},
    // {path: 'blog-details', component: BlogDetailsPageComponent},
    // {path: 'contact', component: ContactPageComponent},
    // Here add new pages component
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }