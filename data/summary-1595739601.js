$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "172,325",
				            "death": "4,351" ,
				            "dailycount": "3,628",
				            "dailydeath": "53" ,
				            "date":"07/25" ,
				            "info":"through 8:00pm 07/24/2020" ,
				            
							"testingaverage":"20,592" ,
							"peopletested":"1,621,670" ,
							"positivity":"8.6%" ,
							"hospitalizations":"2,016" ,                    
				        }       
				};	
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dctn').html(content.dailycount);
				$('#ddet').html(content.dailydeath);
				$('#dte').html(content.date);
				$('#dte_1').html(content.date);
				$('#dte_2').html(content.date);
				$('#dte_3').html(content.date);
				$('#cse').html(content.info);	
				
				$('#tstavg').html(content.testingaverage);	
				$('#ppltst').html(content.peopletested);	
				$('#pos').html(content.positivity);	
				$('#hosp').html(content.hospitalizations);			


});



