

function PokedexViewController() {
    this.ViewName = "Pokedex";
    this.ApiBaseEndPoint = "pokedex";
    this.selectedPokemon = {};
    //Metodo Constructor de la vista
    this.InitView = function () {
        var vc = new PokedexViewController();
        console.log("Pokedex view init!!!");
        //bind del click del buton con el metodo create

        $("#btnRandomize").click(function () {
            vc.Create();
        });
        $("#btnDelete").click(function () {
           
            vc.Delete();
        });
        $("#btnUpdate").click(function () {
           
            vc.Update();
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

        this.LoadTable();
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
    this.Delete = async function() {
        let endPointRoute = this.ApiBaseEndPoint;

        var pokemon = {
            userId: "test@gmail.com",
            pokemonId: $('#txtPokemonId').val()// Always available now
        };
        console.log(this.selectedPokemon);
        console.log(pokemon);
        let ca = new ControlActions();
        ca.DeleteToAPI(endPointRoute, pokemon, function() {
            console.log("Pokemon Deleted");
        });
    };
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
    this.Update = async function () {
       // Gather data from inputs
        let pokemon = {
            pokemonId: $("#txtPokemonId").val(),
            type: $("#txtType").val(),
            pokedexEntry: $("#txtPokedexEntry").val(),
            baseHp: $("#txtBaseHP").val(),
            baseAtk: $("#txtBaseAtk").val(),
            baseSpAtk: $("#txtBaseSpAtk").val(),
            baseDef: $("#txtBaseDef").val(),
            baseSpDef: $("#txtBaseSpDef").val(),
            baseSpeed: $("#txtBaseSpeed").val()
        };
        console.log(pokemon);
        // Construct the query string
        let queryString = `?pokemonId=${encodeURIComponent(pokemon.pokemonId)}&type=${encodeURIComponent(pokemon.type)}&pokedexEntry=${encodeURIComponent(pokemon.pokedexEntry)}&baseHp=${encodeURIComponent(pokemon.baseHp)}&baseAtk=${encodeURIComponent(pokemon.baseAtk)}&baseSpAtk=${encodeURIComponent(pokemon.baseSpAtk)}&baseDef=${encodeURIComponent(pokemon.baseDef)}&baseSpDef=${encodeURIComponent(pokemon.baseSpDef)}&baseSpeed=${encodeURIComponent(pokemon.baseSpeed)}`;

        // Redirect to the new page with query parameters
        window.location.href = `update.html${queryString}`;

        // var ca = new ControlAction();

        // var endPointRoute = this.ApiBaseEndPoint;

        //  ca.PutToAPI(endPointRoute, pokemon, function () {

        //     ca.SweetAlert('Accion completada', 'Descuento Actualizado', 'success').then(() => {
        //         // Refresh the page
        //         location.reload();
        //     });
        // });
    }


    // this.ResetForm = function () {
    //     $("#txtPercent").val('');
    //     $("#txtStart").val('');
    //     $("#txtFin").val('');
    //     $("#slcDestinataries").val('');
    //     $("#slcState").val('');
    // }
    this.LoadTable = function () {
        var ca = new ControlActions();

        //Construimos la ruta del API para consumir el servicio de Retrieve

        var urlService = ca.GetUrlApiService(this.ApiBaseEndPoint);

        console.log(urlService);

        //Definir las columnas a extraer del json que devuelve el API

        //<th>Id</th>
        //                 <th>Name</th>
        //                 <th>Description</th>
        //                 <th>Category</th>
        //                 <th>Price</th>

        var columns = [];
        columns[0] = { 'data': 'PokemonId' };
        columns[1] = { 'data': 'Type' };      
        columns[2] = { 'data': 'PokedexEntry' };
        columns[3] = { 'data': 'BaseAtk' };
        columns[4] = { 'data': 'BaseSpAtk' };
        columns[5] = { 'data': 'BaseDef' }
        columns[6] = { 'data': 'BaseSpDef' }
        columns[7] = { 'data': 'BaseSpeed' }
        columns[8] = { 'data': 'BaseHP' };

        $('#tblPokedex').dataTable({
            select: true,
            "pageLength": 2, 
            "lengthMenu": [2, 3, 5, 10],
            "ajax": {
                "url": urlService + "?userId=test@gmail.com", // Append query parameters
                "dataSrc": "data"
            },
            "columns": columns
        });


        let self = this;
        $('#tblPokedex tbody').on('click', 'tr', function () {

            console.log('Testing click event');



            //Seleccionar la fila a la que dio click
            var row = $(this).closest('tr');

            //Extraemos la data de la tabla
            var DTO = $('#tblPokedex').DataTable().row(row).data();

            $('#txtPokemonId').val(DTO.PokemonId);
            $('#txtType').val(DTO.Type);
            $('#txtPokedexEntry').val(DTO.PokedexEntry);
            $('#txtBaseAtk').val(DTO.BaseAtk);
            $('#txtBaseSpAtk').val(DTO.BaseSpAtk);
            $('#txtBaseDef').val(DTO.BaseDef);
            $('#txtBaseSpDef').val(DTO.BaseSpDef);
            $('#txtBaseSpeed').val(DTO.BaseSpeed);
            $('#txtBaseHP').val(DTO.BaseHP);

            

            //Mapeo de valores del DTO al formulario.
            
        });
    

}
}



//instanciamos la clase

$(document).ready(function () {
    var pv = new PokedexViewController();
    pv.InitView();
});