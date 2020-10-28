<template>
    <div class="produksis">
        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            UBAH DATA
                        </div>
                        <div class="card-body">
                            <form @submit.prevent="ProduksiUpdate">

                                <div class="form-group">
                                    <label>TANGGAL</label>
                                    <input type="date" class="form-control" v-model="produksi.tanggal"
                                           placeholder="Masukkan Tanggal">
                                    <div v-if="validation.tanggal">
                                        <div class="alert alert-danger mt-1" role="alert">
                                            {{ validation.tanggal[0] }}
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>WILAYAH</label>
                                    <input type="text" class="form-control" v-model="produksi.wilayah"
                                           placeholder="Masukkan Wilayah">
                                    <div v-if="validation.wilayah">
                                        <div class="alert alert-danger mt-1" role="alert">
                                            {{ validation.wilayah[0] }}
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>PRODUKSI</label>
                                    <input type="text" class="form-control" v-model="produksi.produksi"
                                           placeholder="Masukkan Produksi">
                                    <div v-if="validation.produksi">
                                        <div class="alert alert-danger mt-1" role="alert">
                                            {{ validation.produksi[0] }}
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <button type="submit" class="btn btn-md btn-success" style="float: right;">UPDATE</button>
                                    <button type="reset" class="btn btn-md btn-danger mr-3" style="float: right;">RESET</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                produksi: {},
                validation: []
            }
        },
        created() {
            axios.get(`http://localhost:8081/api/produksi/${this.$route.params.id}`)
                .then((response) => {
                this.produksi = response.data.data;
            });
        },
        methods: {
            ProduksiUpdate() {
                axios.post(`http://localhost:8081/api/produksi/${this.$route.params.id}`, this.produksi)
                    .then((response) => {
                        this.alertSuccess(response.data.message);
                        this.$router.push({
                            name: 'produksi'
                        });
                        console.log(response);
                    }).catch(error => {
                        this.alert(error);
                        this.validation = error.response.data.data;
                });
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
        }
    }
</script>