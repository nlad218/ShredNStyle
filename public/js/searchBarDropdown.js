$(".chosen-select").chosen({ disable_search_threshold: 10 });
$(".chosen-select").chosen({ no_results_text: "Oops, nothing found!" });
$("#form_field").trigger("chosen:updated");
