<template>
  <!-- Page Wrapper -->
  <div id="wrapper">
    <Sidebar />
    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">

      <!-- Main Content -->
      <div id="content">
        <Header />
        <!-- Begin Page Content -->
        <div class="container-fluid">
          <router-view />
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- End of Main Content -->
     <Footer />
    </div>
    <!-- End of Content Wrapper -->
    <FlashMessage :position="'right top'"></FlashMessage>
  </div>
  <!-- End of Page Wrapper -->
</template>

<script>
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'Dashboard',

    components: {
            Header,
            Sidebar,
            Footer
    }
}
</script>