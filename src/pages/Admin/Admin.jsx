import React, {useState,useEffect} from 'react'
import './Admin.css'
import team_1 from '../../images/user.png'
import admin from '../../images/admin.png'
import projet from '../../images/projet1.png'
import dash from '../../images/dash.png'
import payement from '../../images/payement.png'
import message from '../../images/email.png'
import empl from '../../images/R.png'
import pack from '../../images/pack.png'
import icon1 from '../../images/icon1.png'
import icon2 from '../../images/icon2.png'
import { useNavigate } from "react-router-dom";
import { getUsers } from '../../services/userService'
import { getData } from '../../services/dashService'

const Admin = () => {
  
  const [num,setNum]=useState(null);
  const [compte, setCompte] = useState([]);

  const navigate=useNavigate();

  const logOut=()=>{
    localStorage.clear();
    navigate("/signin");
   } 

  useEffect(() => {
  fetchDash();
  },[]);

  const fetchDash = () => {
    
      getData()
    .then((data) => {
      console.log(data);
      setNum(data);
    })
    .catch((error) => {
      console.error(error);
    });

      getUsers("")
      .then((response) => {
        if (Array.isArray(response)) {
          const firstThreeItems = response.slice(0, 3);
          setCompte(firstThreeItems);
          console.log(firstThreeItems);
        } else {
          console.error('Invalid response:', response);
        }
      })
      .catch((error) => {
        console.error('error:', error);
      });
     
    }
    
  if (!num){
  return <p>Loading  information...</p>;
  }
 
  return (
    <div>
        
      <body class="g-sidenav-show  bg-gray-200">
  <aside class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark" id="sidenav-main " >
    <div class="sidenav-header">
      <i class="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
      <a class="navbar-brand m-0" href=" https://demos.creative-tim.com/material-dashboard/pages/dashboard " target="_blank">
        <span class="ms-1 font-weight-bold text-white btn-lg">Dashboard De l'Administrateur </span>
      </a>
    </div>
    <div class="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link text-white active bg-gradient-primary" href="Admin">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
            <img src={dash} class="navbar-brand-img h-100" alt="main_logo" />

            </div>
            <span class="nav-link-text ms-1">Dashboard</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white " href="/Compte">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
            <img src={admin} class="navbar-brand-img h-100" alt="main_logo" />
            </div>
            <span class="nav-link-text ms-1">Comptes</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white " href="/Projet">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
            <img src={projet} class="navbar-brand-img h-100" alt="main_logo" />
            </div>
            <span class="nav-link-text ms-1">Fichier</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white "  href="/Emplacement">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
            <img src={empl} class="navbar-brand-img h-100" alt="main_logo" />
            </div>
            <span class="nav-link-text ms-1">Emplacement</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white " href="/Abonnement">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
            <img src={payement} class="navbar-brand-img h-100" alt="main_logo" />
            </div>
            <span class="nav-link-text ms-1">Abonnements</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white " href="/message">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
            <img src={message} class="navbar-brand-img h-100" alt="main_logo" />
            </div>
            <span class="nav-link-text ms-1">Messages</span>
          </a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link text-white" href="/pack">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
            <img src={pack} class="navbar-brand-img h-100" alt="main_logo" />

            </div>
            <span class="nav-link-text ms-1">Packs</span>
          </a>
        </li>
     
        
        
      </ul>
    </div>
    <div class="sidenav-footer position-absolute w-100 bottom-0 ">
      <div class="mx-3">
      <a class="btn bg-gradient-primary mt-4 w-100" onClick={logOut} type="button">Se déconnecter</a>
      </div>
    </div>
  </aside>












  <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
    <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" data-scroll="true">
      <div class="container-fluid py-1 px-3">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
            <li class="breadcrumb-item text-sm"><a class="opacity-5 text-dark" href="javascript:;">Pages</a></li>
            <li class="breadcrumb-item text-sm text-dark active" aria-current="page">Dashboard</li>
          </ol>
          <h6 class="font-weight-bolder mb-0">Dashboard</h6>
        </nav>
        <div class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
          <div class="ms-md-auto pe-md-3 d-flex align-items-center">
            <div class="input-group input-group-outline">
              <label class="form-label">Type here...</label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <ul class="navbar-nav  justify-content-end">
            
           
            <li class="nav-item d-xl-none ps-3 d-flex align-items-center">
              <a href="javascript:;" class="nav-link text-body p-0" id="iconNavbarSidenav">
                <div class="sidenav-toggler-inner">
                  <i class="sidenav-toggler-line"></i>
                  <i class="sidenav-toggler-line"></i>
                  <i class="sidenav-toggler-line"></i>
                </div>
              </a>
            </li>
            <li class="nav-item px-3 d-flex align-items-center">
              <a href="javascript:;" class="nav-link text-body p-0">
                <i class="fa fa-cog fixed-plugin-button-nav cursor-pointer"></i>
              </a>
            </li>
            <li class="nav-item dropdown pe-2 d-flex align-items-center">
              <a href="javascript:;" class="nav-link text-body p-0" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fa fa-bell cursor-pointer"></i>
              </a>
              <ul class="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4" aria-labelledby="dropdownMenuButton">
                <li class="mb-2">
                  <a class="dropdown-item border-radius-md" href="javascript:;">
                    <div class="d-flex py-1">
                      <div class="my-auto">
                        <img src="../assets/img/team-2.jpg" class="avatar avatar-sm  me-3 " />
                      </div>
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="text-sm font-weight-normal mb-1">
                          <span class="font-weight-bold">New message</span> from Laur
                        </h6>
                        <p class="text-xs text-secondary mb-0">
                          <i class="fa fa-clock me-1"></i>
                          13 minutes ago
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="mb-2">
                  <a class="dropdown-item border-radius-md" href="javascript:;">
                    <div class="d-flex py-1">
                      <div class="my-auto">
                        <img src="../assets/img/small-logos/logo-spotify.svg" class="avatar avatar-sm bg-gradient-dark  me-3 " />
                      </div>
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="text-sm font-weight-normal mb-1">
                          <span class="font-weight-bold">New album</span> by Travis Scott
                        </h6>
                        <p class="text-xs text-secondary mb-0">
                          <i class="fa fa-clock me-1"></i>
                          1 day
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a class="dropdown-item border-radius-md" href="javascript:;">
                    <div class="d-flex py-1">
                      <div class="avatar avatar-sm bg-gradient-secondary  me-3  my-auto">
                        <svg width="12px" height="12px" viewBox="0 0 43 36" version="1.1" xmlns="http://www.w3.org/2000/svg" link="http://www.w3.org/1999/xlink">
                          <title>credit-card</title>
                          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g transform="translate(-2169.000000, -745.000000)" fill="#FFFFFF" fill-rule="nonzero">
                              <g transform="translate(1716.000000, 291.000000)">
                                <g transform="translate(453.000000, 454.000000)">
                                  <path class="color-background" d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z" opacity="0.593633743"></path>
                                  <path class="color-background" d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="text-sm font-weight-normal mb-1">
                          Payment successfully completed
                        </h6>
                        <p class="text-xs text-secondary mb-0">
                          <i class="fa fa-clock me-1"></i>
                          2 days
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container-fluid py-4 bg-gray-200">
      <div class="row  ">
        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4 ">
          <div class="card">
            <div class="card-header p-3 pt-2">
              <div class="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
              <img src={icon1} class="navbar-brand-img h-100" alt="main_logo" />

              </div>
              <div class="text-end pt-1">
                <p class="text-sm mb-0 text-capitalize">Users</p>
                <h4 class="mb-0">{num.num_accounts}</h4>
              </div>
            </div>
            <div class="card-footer p-3">
              <p class="mb-0"><span class="text-success text-sm font-weight-bolder">+20% </span>than last week</p>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div class="card">
            <div class="card-header p-3 pt-2">
              <div class="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
              <img src={payement} class="navbar-brand-img h-100" alt="main_logo" />

              </div>
              <div class="text-end pt-1">
                <p class="text-sm mb-0 text-capitalize">Abonnements</p>
                <h4 class="mb-0">{num.num_packs}</h4>
              </div>
            </div>
            <div class="card-footer p-3">
              <p class="mb-0"><span class="text-success text-sm font-weight-bolder">+3% </span>than last week</p>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div class="card">
            <div class="card-header p-3 pt-2">
              <div class="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
              <img src={icon2} class="navbar-brand-img h-100" alt="main_logo" />

              </div>
              <div class="text-end pt-1">
                <p class="text-sm mb-0 text-capitalize">Fichiers</p>
                <h4 class="mb-0">{num.num_fichier}</h4>
              </div>
            </div>
            <div class="card-footer p-3">
              <p class="mb-0"><span class="text-danger text-sm font-weight-bolder">-2%</span> than last week</p>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6">
          <div class="card">
            <div class="card-header p-3 pt-2">
              <div class="icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 position-absolute">
              <img src={message} class="navbar-brand-img h-100" alt="main_logo" />

              </div>
              <div class="text-end pt-1">
                <p class="text-sm mb-0 text-capitalize">Message</p>
                <h4 class="mb-0">{num.num_messages}</h4>
              </div>
            </div>
            <div class="card-footer p-3">
              <p class="mb-0"><span class="text-success text-sm font-weight-bolder">+5% </span>than yesterday</p>
            </div>
          </div>
        </div>
      </div>
     <br></br>
      <div class="row">
        <div class="col-12">
          <div class="card my-4">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">

                <h6 class="text-white text-capitalize ps-3">Comptes</h6>
              </div>

            </div>
            <div class="card-body px-0 pb-2">
              <div class="table-responsive p-0">
                <table class="table align-items-center mb-0">
                  <thead>
                    <tr>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">User</th>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Profession</th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Phone</th>
                      <th class="text-secondary opacity-7"></th>
                    </tr>
                  </thead>
                
                     
                  <tbody>
                  {compte.map(compte => (
            <tr key={compte.id}>
                      <td>
                        <div class="d-flex px-2 py-1">
                          <div>
                            <img src={team_1} class="avatar avatar-sm me-3 border-radius-lg" alt="user1"/>
                          </div>
                          <div class="d-flex flex-column justify-content-center">
                            <h6 class="mb-0 text-sm">{compte.userName}</h6>
                            <p class="text-xs text-secondary mb-0">{compte.email}</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p class="text-xs font-weight-bold mb-0">{compte.profession}</p>
                        <p class="text-xs text-secondary mb-0">{compte.adresse}</p>
                      </td>
                      <td class="align-middle text-center text-sm">
                        <span class="badge badge-sm bg-gradient-success">Online</span>
                      </td>
                      <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-bold">{compte.phone}</span>
                      </td>
   
                
                    </tr>
                                          ))}


            
                  </tbody>

            
                </table>
             

              </div>
            </div>
          </div>
        </div>
          















          


</div>


</div>



    



</main>
  </body>
    </div>
  )
}

export default Admin
