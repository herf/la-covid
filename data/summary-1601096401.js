$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "265,775",
				            "death": "6,488" ,
				            "dailycount": "1,401",
				            "dailydeath": "34" ,
				            "date":"09/25" ,
				            "info":"through 8:00pm 09/24/2020" ,
				            
							"testingaverage":"12,104" ,
							"peopletested":"2,609,405" ,
							"positivity":"3%" ,
							"hospitalizations":"760" 							
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



