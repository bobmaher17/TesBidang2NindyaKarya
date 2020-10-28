<template>
    <!-- Sidebar -->
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

      <!-- Sidebar - Brand -->
      <router-link to="/" class="sidebar-brand d-flex align-items-center justify-content-center">
          <img src="@/assets/images/logo-nindya.png" width="45px" style="-webkit-filter: drop-shadow(2px 2px 2px #c52127); filter: drop-shadow(2px 2px 2px #c52127);" />
        <div class="sidebar-brand-text mx-3">E-Report</div>
      </router-link>
        

      <!-- Divider -->
      <hr class="sidebar-divider my-0">

      <!-- Nav Item - Dashboard -->
      <li class="nav-item">
        <router-link to="/" class="nav-link">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span> Dashboard</span>
        </router-link>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider">

      <!-- Heading -->
      <div class="sidebar-heading">
        Menu
      </div>

      <!-- Nav Item - Pages Collapse Menu -->
      <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
          <i class="fas fa-fw fa-cog"></i>
          <span>Master Data</span>
        </a>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Sub Menu</h6>
            <router-link to="produksi" class="collapse-item">Produksi</router-link>
          </div>
        </div>
      </li>
    </ul>
    <!-- End of Sidebar -->
</template>

<script>
export default {

}
</script>