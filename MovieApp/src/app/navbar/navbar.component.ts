import { Component, OnInit } from '@angular/core';
import { Category } from '../category/category.model';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isAuthenticated : boolean = false
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user 
      /* user bilgisi null değilse false dönsün, 
      bu ifadenin de değilini alırsam true olur ve isAuthenticated true olmus olur */
    })
  }

  onLogout(){
    this.authService.logout()
  }
}
