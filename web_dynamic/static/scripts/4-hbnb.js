$(document).ready( function() {
        $("input").on("change"), function() {
                wanted = [];
                if(input.checked) {
                        wanted.push($("input#id").val());
                }
                if(input.checked != true) {
                        wanted.pop($("input#amenty_id").val());
                }
		$("div#amenities h4").val(wanted);
        }
	$.get("http://0.0.0.0:5001/api/v1/status/", function(data, tstatus) {
		if(tstatus === "success") {
			$("div#api_status").addClass("available");
		}
		else {
			$("div#api_status").removeClass("available");
		}
	});
	$.post("http://0.0.0.0:5001/api/v1/places_search/",
		'{"Content-type": "application/json"}', function(data. tstatus) {
			for( key in data) {
				$("section.places").html("<article>$(key)</article>");
			}
		});
	$("button").on("click"), function() {
		$.post("http://0.0.0.0:5001/api/v1/places_search/",
		JSON.stringify(wanted), function(data, rstatus) {
		});
	}
});
