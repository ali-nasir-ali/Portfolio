class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header class="name_box">
      <div class="logo_box"></div>
      <div class="name_maya">
        <a class="" href="index.html"><h2>nasir ali</h2></a>
      </div>
    
      <p>/</p>
      <div class="name_manager">
        <a class="" href="index.html"><p>SOFTWARE DEVELOPER</p></a>
      </div>
    
      <nav >
        <ul class="navbar" id="navbar">
          <li><a id="nav_bar_close" href="#"><i class="fa fa-close"></i></a></li>
          <li><a href="index.html">ABOUT ME</a></li>
          <li><a href="resume.html">RESUME</a></li>
          <li><a href="projects.html">PROJECTS</a></li>
          <li><a href="contact.html">CONTACT</a></li>
        </ul>
      </nav>
      <a href="#navbar">
      <div class="ham_bar_box">
        <div class="ham_bar_one"></div>
        <div class="ham_bar_two"></div>
        <div class="ham_bar_three"></div>
      </div></a>
    </header>
      `;
  }
}

customElements.define("header-component", Header);

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <footer>
    <div class="footer_contact">
      <div>
        <h3>Call</h3>
        <p>123-456-7890</p>
      </div>
      <div>
        <h3>Write</h3>
        <p><a href="mailto:ali.nasir.turii@gmail.com">ali.nasir.turii@gmail.com</a></p>
      </div>
    </div>
    <div class="footer_social">
      <h3>Follow</h3>
      <!-- social links -->

      
      
      

      <a class="hero_social_link" href="https://join.slack.com/t/newworkspace-mhh2606/shared_invite/zt-1a4xeyiau-am5~499oOPi2QCtrHhSaLQ"><i class="fa fa-slack"></i></a>
      <a class="hero_social_link" href="https://twitter.com/a_nasir_ali"><i class="fa fa-twitter"></i></a>
      <a class="hero_social_link" href="mailto:ali.nasir.turii@gmail.com"><i class="fa fa-envelope"></i></a>
      <a class="hero_social_link" href="https://github.com/ali-nasir-ali"><i class="fa fa-github fa-1x"></i></a>
    </div>
    <div class="footer_copy_right">
    <p class="para">
    Copyright &copy; <script>document.write(new Date().getFullYear())</script> MPL v.2.0  | programmed by
    <a href="https://github.com/ali-nasir-ali"><span style="color: var(--primary-color);">nasir</span></a>
</p>
      
    </div>
  </footer>
  
      `;
  }
}

customElements.define("footer-component", Footer);
