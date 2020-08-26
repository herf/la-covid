$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "233,777",
				            "death": "5,605" ,
				            "dailycount": "989",
				            "dailydeath": "51" ,
				            "date":"08/25" ,
				            "info":"through 8:00pm 08/24/2020" ,
				            
							"testingaverage":"15,127" ,
							"peopletested":"2,207,784" ,
							"positivity":"5.3%" ,
							"hospitalizations":"1,200" ,                    
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



