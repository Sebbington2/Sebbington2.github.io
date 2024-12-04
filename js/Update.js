
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function PokedexViewController() {
    this.ViewName = "Pokedex";
    this.ApiBaseEndPoint = "pokedex";
    this.selectedPokemon = {};
    //Metodo Constructor de la vista
    this.InitView = function () {
        var vc = new PokedexViewController();
        console.log("Pokedex view init!!!");
        //bind del click del buton con el metodo create

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

    }

    //Metodo de creacion de usuarios


    this.Update = async function () {
        var pokemon = {};
        pokemon.userId = "test@gmail.com"
        pokemon.pokemonId = $("#txtName").val();
        pokemon.type = $("#txtType").val();
        pokemon.pokedexEntry = $("#pokedexAreaTxt").val();
        pokemon.baseHp = $("#txtBaseHp").val();;
        pokemon.baseAtk = $("#txtBaseAtk").val();
        pokemon.baseSpAtk = $("#txtSpAtk").val();
        pokemon.baseDef = $("#txtBaseDef").val();
        pokemon.baseSpDef = $("#txtBaseSpDef").val();

        pokemon.baseSpeed = $("#txtBaseSpeed").val();
        console.log(pokemon)
        var ca = new ControlActions();

        var endPointRoute = this.ApiBaseEndPoint;

         ca.PutToAPI(endPointRoute, pokemon, function () {

            ca.SweetAlert('Success!', 'Pokemon Updated', 'success').then(() => {
                // Refresh the page
                 window.location.href = 'userPokedex.html';
            });
        });
    }


    // this.ResetForm = function () {
    //     $("#txtPercent").val('');
    //     $("#txtStart").val('');
    //     $("#txtFin").val('');
    //     $("#slcDestinataries").val('');
    //     $("#slcState").val('');
    // }

}



//instanciamos la clase

$(document).ready(function () {
    var pv = new PokedexViewController();

    $("#txtName").val(getQueryParam("pokemonId"));
    $("#txtType").val(getQueryParam("type"));
    $("#txtBaseHp").val(getQueryParam("baseHp"));
    $("#txtBaseAtk").val(getQueryParam("baseAtk"));
    $("#txtSpAtk").val(getQueryParam("baseSpAtk"));
    $("#txtBaseDef").val(getQueryParam("baseDef"));
    $("#txtBaseSpDef").val(getQueryParam("baseSpDef"));
    $("#txtBaseSpeed").val(getQueryParam("baseSpeed"));
    $("#pokedexAreaTxt").val(getQueryParam("pokedexEntry"));
    pv.InitView();
});