$(document).ready( function() {
        $("input").on("change") => {
                wanted = [];
                if(input.checked) {
                        wanted.push($("input#id").val());
                }
                if(input.checked != true) {
                        wanted.pop($("input#amenty_id").val());
                }
		$("div.amenities h4").val(wanted)
        }
});
