$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "271,371",
				            "death": "6,610" ,
				            "dailycount": "1,148",
				            "dailydeath": "35" ,
				            "date":"10/01" ,
				            "info":"through 8:00pm 09/30/2020" ,
				            
							"testingaverage":"12,404" ,
							"peopletested":"2,676,905" ,
							"positivity":"3%" ,
							"hospitalizations":"746" 							
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



