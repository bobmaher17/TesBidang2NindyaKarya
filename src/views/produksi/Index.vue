<template>
  <div class="produksis">
    <!-- Page Heading -->
    <h1 class="h4 mb-2 text-gray-800">
      Master Data /
      <b>Produksi</b>
    </h1>
    <!-- Page Heading -->

    <!-- Element -->
    <b-row>
      <b-col lg="2" class="my-3">
        <b-form-group
          label="Per page"
          label-cols-sm="6"
          label-cols-md="6"
          label-cols-lg="6"
          label-align-sm="right"
          label-size="sm"
          label-for="perPageSelect"
          class="mb-0"
        >
          <b-form-select
            v-model="perPage"
            id="perPageSelect"
            size="sm"
            :options="pageOptions"
          ></b-form-select>
        </b-form-group>
      </b-col>
      <b-col lg="4" class="my-3 ml-auto">
        <b-input-group>
          <b-form-input
            v-model="filter"
            type="search"
            id="filterInput"
            placeholder="Pencarian..."
          ></b-form-input>
          <b-input-group-append>
            <b-button :disabled="!filter" @click="filter = ''">Hapus</b-button>
          </b-input-group-append>
        </b-input-group>
      </b-col>
    </b-row>
    <!-- Element End -->

    <!-- Main table element -->
    <div class="card">
      <div class="card-header">
        Produksi
        <b-button
          pill
          size="sm"
          variant="success"
          @click="$router.push('produksi-create')"
          class="float-right"
        >
          <i class="fas fa-plus"></i> Tambah Data
        </b-button>
      </div>

      <div class="card-body">
        <b-table
          class="table table-bordered"
          show-empty
          small
          stacked="md"
          :items="items"
          :fields="fields"
          :current-page="currentPage"
          :per-page="perPage"
          :filter="filter"
          :filterIncludedFields="filterOn"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          :sort-direction="sortDirection"
          @filtered="onFiltered"
        >

          <template v-slot:cell(no)="data">
              {{ data.index+1 }}
          </template>

          <template v-slot:cell(tanggal)="data">
              {{ data.item.tanggal ? data.item.tanggal : '-' }}
          </template>

          <template v-slot:cell(wilayah)="data">
              {{ data.item.wilayah ? data.item.wilayah : '-' }}
          </template>

          <template v-slot:cell(produksi)="data">
              {{ data.item.produksi ? data.item.produksi : '-' }}
          </template>

          <template v-slot:cell(actions)="row">
            <b-button
              pill
              v-b-tooltip.hover.top="'Ubah'"
              size="sm"
              variant="primary"
              @click="$router.push({name: 'produksi-update', params: { id: row.item.id }});"
              class="mr-1"
            >
              <i class="fas fa-pencil-alt"></i>
            </b-button>
            <b-button
              pill
              v-b-tooltip.hover.top="'Hapus'"
              size="sm"
              variant="danger"
              @click.prevent="ProduksiDelete(row.item.id)"
              class="mr-1"
            >
              <i class="fas fa-trash-alt"></i>
            </b-button>
          </template>
        </b-table>

      </div>

      <div class="card-footer">
        <b-col lg="3" class="my-0 ml-auto">
          <b-pagination
            pills
            v-model="currentPage"
            :total-rows="totalRows"
            :per-page="perPage"
            align="fill"
            size="sm"
            class="my-0"
          ></b-pagination>
        </b-col>
      </div>
    </div>
  </div>
</template>

<script>
import * as produksiService from "@/services/produksi/produksi-services";
import axios from 'axios'

const fields = [
  {
    key: "no",
    label: "#",
    sortable: false,
  },
  {
    key: "tanggal",
    label: "Tanggal",
    sortable: true,
    sortDirection: "desc",
  },
  {
    key: "wilayah",
    label: "Wilayah",
    sortable: true,
    sortDirection: "desc",
  },
  {
    key: "produksi",
    label: "Produksi",
    sortable: false,
  },
  {
    key: "actions",
    sortable: false,
  },
];

export default {
  name: "produksi",

  data() {
    return {
      formData: {
        tanggal: '',
        wilayah: '',
        produksi: '',
      },
      fields,
      items: [],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [5, 10, 25],
      sortBy: "",
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      filterOn: [],
    };
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter((f) => f.sortable)
        .map((f) => {
          return { text: f.label, value: f.key };
        });
    },
  },
  mounted() {
    // ShowData
    this.showData();

    // Set the initial number of items
    this.totalRows = this.items.length;
  },
  methods: {
    showData: async function() {
      try {
        const response = await produksiService.showData();
        // console.log(response);
        this.items.unshift(response.data); 
        this.items = response.data.data.data;
        console.log(this.items);
      } catch (error) {
        this.flashMessage.error({
          title: 'Error',
          message: "Terjadi kesalahan teknis, silahkan refresh atau hubungi tim IT.",
          time: 2000,
        });
      }
    },
    ProduksiDelete(id){
        this.$swal({
            title: 'Peringatan!',
            text: "Anda yakin akan menghapus data tersebut?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: "Tidak",
            confirmButtonText: "Ya"
            }).then((result) => {
            if (result.value) {
                axios.delete(`http://localhost:8081/api/produksi/${id}`)
                .then(response =>{
                    this.alertSuccess(response.data.message);
                    this.showData();
                    console.log(response);
                }).catch(error => {
                    this.alert(error);
                    console.log(error.response);
                });
            }
        })
    },
    create() {
      console.log("form submitted.");
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    alertSuccess(message){
        this.$swal('Berhasil!',
            message,
            'success'
        );
    },
    alert(message){
        this.$swal({
            title: "",
            text: message,
            type: "error",
            showConfirmButton: true
        });
    },
  },
};
</script>