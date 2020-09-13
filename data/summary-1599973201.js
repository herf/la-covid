$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "253,176",
				            "death": "6,197" ,
				            "dailycount": "1,177",
				            "dailydeath": "29" ,
				            "date":"09/12" ,
				            "info":"through 8:00pm 09/11/2020" ,
				            
							"testingaverage":"11,610" ,
							"peopletested":"2,436,832" ,
							"positivity":"3.4%" ,
							"hospitalizations":"877" , 
							                
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



