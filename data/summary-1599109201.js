$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "243,935",
				            "death": "5,878" ,
				            "dailycount": "1,457",
				            "dailydeath": "51" ,
				            "date":"09/02" ,
				            "info":"through 8:00pm 09/01/2020" ,
				            
							"testingaverage":"13,022" ,
							"peopletested":"2,317,851" ,
							"positivity":"4.9%" ,
							"hospitalizations":"1,048" ,                    
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



