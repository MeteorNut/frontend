import React from 'react'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
export default function index() {
  return (
    <>

    <Head><title>Meteor</title></Head>

<header>
<nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand">Meteor</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " href=".">Home     <i class="bi bi-house-heart"></i> </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="about_us">About us   <i class="bi bi-file-earmark-person"></i></Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Service
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="song">Song   <i class="bi bi-file-music"></i></Link></li>
            <li><Link className="dropdown-item" href="Youtuber">Youtuber     <i class="bi bi-person-square"></i></Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='#Contact'>Contact      <i className="bi bi-telephone" /></a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <Link href={'https://frontend-one-phi-55.vercel.app/dashboard/'} className="btn btn-outline-success" type="submit">login</Link>
      </form>
    </div>
  </div>
</nav>
</header>

<main>
<div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval={2000}>
      <img src="Center Game.png" className="rounded" alt="..." width={1550} height={697} />
    </div>
    <div className="carousel-item" data-bs-interval={2000}>
      <img src="Youtuber.png" className="d-block w-100" alt="..." width={1550} height={697} />
    </div>
    <div className="carousel-item" data-bs-interval={2000}>
      <img src="Song.png" className="d-block w-100" alt="..." width={1550} height={697} />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

<br/>
<br/>
<br/>
<center>
<div>
  <p /><h4><b>เว็บไซต์ที่มากไปด้วย Youtuber ที่จะมาให้เสียงหัวเราะ ความสนุก เพลิดเพลินและสนุกสนาน </b></h4><p />
  <p /><h4><b>อีกทั้งยังมี Channel Song หรือก็คือ ช่องที่มากไปด้วยเพลงประเภทต่างๆ ที่จะทำให้เราได้เพลิดเพลินไปกับเสียงเพลง </b></h4><p />
</div>
<br/>
<br/>
<br/>

<div class="container marketing">
<div>
  <div className="row">
    <div className="col-lg-4">
      <center><img className="bd-placeholder-img rounded-circle" width={140} height={140} src="https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/338585293_239829545128899_4220305952545380222_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeGzYyEPVneLzutQt1uQLiO3NzdZQocZNG83N1lChxk0b966mGHCMmXjtByxHYaUMDEHzLIl-3INubQv2_XgYqKd&_nc_ohc=prsgU_8XIOoAX_blz4U&_nc_ht=scontent.fcnx3-1.fna&oh=00_AfBKCNpblXCIWxWBjolMaDdXmnixkt-BG_uZsGYNxWyjTQ&oe=6484518F"/>
      <h2 className="fw-normal">ทะเล</h2></center> 
      <p></p>
      <center><p><Link className="btn btn-secondary" href="#">View details »</Link></p></center>
    </div>
    <div className="col-lg-4">
    <center><img className="bd-placeholder-img rounded-circle" width={140} height={140} src="https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/294666886_5270433536380653_8262167781483113888_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeEHq06TVT52Avb4UpF5IHds3O0g1pbXZSfc7SDWltdlJz6UHXpbZbd6zTto8MET4-MAOF-vr-Gc-JVFdk4R4xob&_nc_ohc=E9PbOYxYZJMAX_JMU1h&_nc_ht=scontent.fcnx3-1.fna&oh=00_AfBGRiS-FhcsgqXiEOrj2pcNprreJWnM6WjwHh2bCeP9cA&oe=64841D22"/>
    <h2 className="fw-normal">ภูเขา</h2></center>
      <p></p>
      <center><p><Link className="btn btn-secondary" href="#">View details »</Link></p></center>
    </div>
    <div className="col-lg-4">
    <center><img className="bd-placeholder-img rounded-circle" width={140} height={140} src="https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/294507498_5270433143047359_6697456741612438194_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeEdz-HY68xGe6YKH6I39Ys1x5yW9J9wI4fHnJb0n3Ajh6uh0Cr945_HVlJ_5M-dLs9BMW3_5lzVNfam_zYmb3Q3&_nc_ohc=oIZFROQWpSUAX9dYdv8&_nc_ht=scontent.fcnx3-1.fna&oh=00_AfAcZ7gk-UKTc9jZk6O17Vie6TpHj1m2DM7UFpWRBiYhag&oe=6485CA75"/>
    <h2 className="fw-normal">วัด</h2></center>
      <p></p>
      <center><p><Link className="btn btn-secondary" href="#">View details »</Link></p></center>
    </div>
  </div>
</div>
</div>

<br/>
<br/>
<br/>
<div>
<div class="container marketing">
<div>
  <div className="row">
    <div className="col-lg-4">
      <center><img className="bd-placeholder-img rounded-circle" width={140} height={140} src="https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/338585293_239829545128899_4220305952545380222_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeGzYyEPVneLzutQt1uQLiO3NzdZQocZNG83N1lChxk0b966mGHCMmXjtByxHYaUMDEHzLIl-3INubQv2_XgYqKd&_nc_ohc=prsgU_8XIOoAX_blz4U&_nc_ht=scontent.fcnx3-1.fna&oh=00_AfBKCNpblXCIWxWBjolMaDdXmnixkt-BG_uZsGYNxWyjTQ&oe=6484518F"/>
      <h2 className="fw-normal">ทะเล</h2></center> 
      <p></p>
      <center><p><Link className="btn btn-secondary" href="#">View details »</Link></p></center>
    </div>
    <div className="col-lg-4">
    <center><img className="bd-placeholder-img rounded-circle" width={140} height={140} src="https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/294666886_5270433536380653_8262167781483113888_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeEHq06TVT52Avb4UpF5IHds3O0g1pbXZSfc7SDWltdlJz6UHXpbZbd6zTto8MET4-MAOF-vr-Gc-JVFdk4R4xob&_nc_ohc=E9PbOYxYZJMAX_JMU1h&_nc_ht=scontent.fcnx3-1.fna&oh=00_AfBGRiS-FhcsgqXiEOrj2pcNprreJWnM6WjwHh2bCeP9cA&oe=64841D22"/>
    <h2 className="fw-normal">ภูเขา</h2></center>
      <p></p>
      <center><p><Link className="btn btn-secondary" href="#">View details »</Link></p></center>
    </div>
    <div className="col-lg-4">
    <center><img className="bd-placeholder-img rounded-circle" width={140} height={140} src="https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/294507498_5270433143047359_6697456741612438194_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeEdz-HY68xGe6YKH6I39Ys1x5yW9J9wI4fHnJb0n3Ajh6uh0Cr945_HVlJ_5M-dLs9BMW3_5lzVNfam_zYmb3Q3&_nc_ohc=oIZFROQWpSUAX9dYdv8&_nc_ht=scontent.fcnx3-1.fna&oh=00_AfAcZ7gk-UKTc9jZk6O17Vie6TpHj1m2DM7UFpWRBiYhag&oe=6485CA75"/>
    <h2 className="fw-normal">วัด</h2></center>
      <p></p>
      <center><p><Link className="btn btn-secondary" href="#">View details »</Link></p></center>
    </div>
  </div>
</div>
</div>
<div>
</div>
</div>


</center>
 




</main>

<footer>
<section id="Contact" class="py-5"> 
            <div class="container">
                <footer class="py-3 my-4">
                  <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                    <li class="nav-item"><Link href="." class="nav-link px-2 text-muted"><i class="bi bi-house-heart-fill"></i> <b>Home</b></Link></li>
                    <li class="nav-item"><a href="https://web.facebook.com/Teerapong2545" class="nav-link px-2 text-muted"><i class="bi bi-facebook"></i> <b>Facebook</b></a></li>
                    <li class="nav-item"><a href="https://www.instagram.com/n_foolmoon/" class="nav-link px-2 text-muted"><i class="bi bi-instagram"></i> <b>Instagram</b></a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted"><i class="bi bi-telephone"></i> <b>097-996-2835</b></a></li>
                  </ul>
                  <p class="text-center text-muted">&copy; <b>2022 Center Game Company, Inc</b></p>
                </footer>
              </div>
</section>
</footer>

    </>
  )
}
