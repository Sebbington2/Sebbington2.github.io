

function PokedexViewController() {
    this.ViewName = "Pokedex";
    this.ApiBaseEndPoint = "pokedex";

    //Metodo Constructor de la vista
    this.InitView = function () {
        console.log("Pokedex view init!!!");
        //bind del click del buton con el metodo create

        $("#btnRandomize").click(function () {
            var vc = new PokedexViewController();
            vc.Create();
        });

        // $("#btnUpdate").click(function () {
        //     var vc = new DiscountViewController();
        //     vc.Update();
        // });

        // $("#btnDelete").click(function () {
        //     var vc = new DiscountViewController();
        //     vc.Delete();
        // });
        // $("#reset-button").click((event) => {
        //     event.preventDefault();
        //     this.ResetForm();
        // });

        //carga de la tabla

        // this.LoadTable();
    }

    //Metodo de creacion de usuarios

    this.Create = async function () {


        //Crear el DTO de user

        var pokemon = {};
        pokemon.userId = "test@gmail.com"
        pokemon.pokemonId = $("#txtName").val();
        pokemon.type = $("#txtType").val();
        //se debe ajustar para no enviar defaults
        pokemon.baseHp = $("#txtBaseHp").val();;
        pokemon.baseAtk = $("#txtBaseAtk").val();
        pokemon.baseSpAtk = $("#txtSpAtk").val();
        pokemon.baseDef = $("#txtBaseDef").val();
        pokemon.baseSpDef = $("#txtBaseSpDef").val();

        pokemon.baseSpeed = $("#txtSpeed").val();




        var ca = new ControlActions();

        var endPointRoute = this.ApiBaseEndPoint;

            ca.PostToAPI(endPointRoute, pokemon, function (response) {

                var pokedexEntry = response.data.PokedexEntry; 


                $('#pokedexAreaTxt').val(pokedexEntry);
                ca.SweetAlert('Acción completada', 'Pokemon guardado en la Pokedex', 'success').then(() => {
                    // Refresh the page
                    // location.reload();
                });
                console.log("Pokemon created");
            });



    }
    // this.ValidateDiscountCreate = function (coupon) {
    //     var ca = new ControlAction();

    //     // Create a promise to handle the asynchronous nature of SweetAlert
    //     return new Promise((resolve) => {
    //         if (coupon.discountPercentage == 0 || coupon.discountPercentage == null || coupon.discountPercentage === undefined) {
    //             ca.SweetAlert('Error', 'Debe incluir el porcentaje del descuento', 'error').then(() => {
    //                 resolve(false); // Resolve promise with false indicating validation failure
    //             });
    //             return; // Exit function to prevent further code execution
    //         }
    //         if (coupon.endDate == "" || coupon.endDate == null || coupon.endDate === undefined) {
    //             ca.SweetAlert('Error', 'Debe seleccionar  fecha de expiración', 'error').then(() => {
    //                 resolve(false); // Resolve promise with false indicating validation failure
    //             });
    //             return; // Exit function to prevent further code execution
    //         }
    //         if (coupon.startDate == "" || coupon.startDate == null || coupon.startDate === undefined) {
    //             ca.SweetAlert('Error', 'Debe seleccionar  fecha de inicio', 'error').then(() => {
    //                 resolve(false); // Resolve promise with false indicating validation failure
    //             });
    //             return; // Exit function to prevent further code execution
    //         }
    //         if (coupon.isActive == "" || coupon.isActive == null || coupon.isActive === undefined) {
    //             ca.SweetAlert('Error', 'Debe seleccionar algun estado de la tabla ', 'error').then(() => {
    //                 resolve(false); // Resolve promise with false indicating validation failure
    //             });
    //             return; // Exit function to prevent further code execution
    //         }
    //         if (coupon.userCategory == "" || coupon.userCategory == null || coupon.userCategory === undefined) {
    //             ca.SweetAlert('Error', 'Debe seleccionar alguna categoria de usuario de la tabla ', 'error').then(() => {
    //                 resolve(false); // Resolve promise with false indicating validation failure
    //             });
    //             return; // Exit function to prevent further code execution
    //         }

    //         // If all validations pass, resolve the promise with true
    //         resolve(true);
    //     });
    // };
    // this.ValidateDiscountUpdate = function (coupon) {
    //     var ca = new ControlAction();

    //     // Create a promise to handle the asynchronous nature of SweetAlert
    //     return new Promise((resolve) => {
    //         if (coupon.discountPercentage == 0 || coupon.discountPercentage == null || coupon.discountPercentage === undefined) {
    //             ca.SweetAlert('Error', 'Debe incluir el porcentaje del descuento', 'error').then(() => {
    //                 resolve(false); // Resolve promise with false indicating validation failure
    //             });
    //             return; // Exit function to prevent further code execution
    //         }
    //         if (coupon.id == "" || coupon.id == null || coupon.id === undefined) {
    //             ca.SweetAlert('Error', 'Debe seleccionar algun descuento de la tabla', 'error').then(() => {
    //                 resolve(false); // Resolve promise with false indicating validation failure
    //             });
    //             return; // Exit function to prevent further code execution
    //         }
    //         if (coupon.endDate == "" || coupon.endDate == null || coupon.endDate === undefined) {
    //             ca.SweetAlert('Error', 'Debe seleccionar  fecha de expiración', 'error').then(() => {
    //                 resolve(false); // Resolve promise with false indicating validation failure
    //             });
    //             return; // Exit function to prevent further code execution
    //         }
    //         if (coupon.startDate == "" || coupon.startDate == null || coupon.startDate === undefined) {
    //             ca.SweetAlert('Error', 'Debe seleccionar  fecha de inicio', 'error').then(() => {
    //                 resolve(false); // Resolve promise with false indicating validation failure
    //             });
    //             return; // Exit function to prevent further code execution
    //         }
    //         if (coupon.isActive == "" || coupon.isActive == null || coupon.isActive === undefined) {
    //             ca.SweetAlert('Error', 'Debe seleccionar algun estado de la tabla ', 'error').then(() => {
    //                 resolve(false); // Resolve promise with false indicating validation failure
    //             });
    //             return; // Exit function to prevent further code execution
    //         }
    //         if (coupon.userCategory == "" || coupon.userCategory == null || coupon.userCategory === undefined) {
    //             ca.SweetAlert('Error', 'Debe seleccionar alguna categoria de usuario de la tabla ', 'error').then(() => {
    //                 resolve(false); // Resolve promise with false indicating validation failure
    //             });
    //             return; // Exit function to prevent further code execution
    //         }

    //         // If all validations pass, resolve the promise with true
    //         resolve(true);
    //     });
    // };
    // this.Update = async function () {

    //     var discount = {};

    //     discount.discountPercentage = $("#txtPercent").val();

    //     discount.userCategory = $("#slcDestinataries").val();
    //     //se debe ajustar para no enviar defaults
    //     discount.id = $("#txtId").val();
    //     console.log(discount.id);
    //     discount.startDate = $("#txtStart").val();
    //     discount.endDate = $("#txtFin").val();
    //     discount.isActive = $("#slcState").val();

    //     if (!(await this.ValidateDiscountUpdate(discount))) {
    //         return; // Stop execution if validation fails
    //     }
    //     var ca = new ControlAction();

    //     var endPointRoute = this.ApiBaseEndPoint + "/Update";

    //     ca.PutToAPI(endPointRoute, discount, function () {

    //         ca.SweetAlert('Accion completada', 'Descuento Actualizado', 'success').then(() => {
    //             // Refresh the page
    //             location.reload();
    //         });
    //     });
    // }


    // this.ResetForm = function () {
    //     $("#txtPercent").val('');
    //     $("#txtStart").val('');
    //     $("#txtFin").val('');
    //     $("#slcDestinataries").val('');
    //     $("#slcState").val('');
    // }
    // this.LoadTable = function () {
    //     var ca = new ControlAction();

    //     //Construimos la ruta del API para consumir el servicio de Retrieve

    //     var urlService = ca.GetUrlApiService(this.ApiBaseEndPoint + "/RetrieveAll");

    //     //Definir las columnas a extraer del json que devuelve el API

    //     //<th>Id</th>
    //     //                 <th>Name</th>
    //     //                 <th>Description</th>
    //     //                 <th>Category</th>
    //     //                 <th>Price</th>

    //     var columns = [];
    //     columns[0] = { 'data': 'id' };
    //     columns[1] = { 'data': 'discountPercentage' };
    //     columns[2] = { 'data': 'userCategory' };
    //     columns[3] = { 'data': 'startDate' };
    //     columns[4] = { 'data': 'endDate' };
    //     columns[5] = { 'data': 'isActive' }
    //     columns[6] = { 'data': 'creationDate' }

    //     $('#tblDiscounts').dataTable({
    //         "ajax": {
    //             "url": urlService,
    //             "dataSrc": ""
    //         },
    //         "columns": columns,
    //         "language": {
    //             "url": "//cdn.datatables.net/plug-ins/2.1.3/i18n/es-MX.json"
    //         }
    //     });



    //     $('#tblDiscounts tbody').on('click', 'tr', function () {

    //         console.log('Testing click event');



    //         //Seleccionar la fila a la que dio click
    //         var row = $(this).closest('tr');

    //         //Extraemos la data de la tabla
    //         var DTO = $('#tblDiscounts').DataTable().row(row).data();

    //         //Mapeo de valores del DTO al formulario.
    //         $('#txtId').val(DTO.id);
    //         $('#slcDestinataries').val(DTO.userCategory).change();
    //         $('#txtPercent').val(DTO.discountPercentage);

    //         var onlyDate = DTO.endDate.split("T");
    //         $('#txtFin').val(onlyDate[0]);
    //         var onlyDate2 = DTO.startDate.split("T");
    //         $('#txtStart').val(onlyDate2[0]);
    //         $('#slcState').val(DTO.isActive).change();
    //     });
    // }

}



//instanciamos la clase

$(document).ready(function () {
    var pv = new PokedexViewController();
    pv.InitView();
});