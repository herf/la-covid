$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "242,521",
				            "death": "5,829" ,
				            "dailycount": "840",
				            "dailydeath": "45" ,
				            "date":"09/01" ,
				            "info":"through 8:00pm 08/31/2020" ,
				            
							"testingaverage":"13,156" ,
							"peopletested":"2,305,085" ,
							"positivity":"5.1%" ,
							"hospitalizations":"1,057" ,                    
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



