  $("#js-shopping-list-form > button").on("click", function(event) {
    event.preventDefault();
    if($("#shopping-list-entry").val()){
      $(".shopping-list").append(`
      <li>
        <span class="shopping-item">${$("#shopping-list-entry").val()}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
      <!-- L I S T   I T E M -->`
      );
    }
  });//function



	$(".shopping-list").on("click", ".shopping-item-toggle", function(event) {
		$(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
	}); //function


  $(".shopping-list").on("click", ".shopping-item-delete", function(event){
   $(event.target).closest("li").remove();
 });//function
