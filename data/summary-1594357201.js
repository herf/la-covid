$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "124,738",
				            "death": "3,689" ,
				            "dailycount": "1,777",
				            "dailydeath": "50" ,
				            "date":"07/09" ,
				            "info":"through 8:00pm 07/08/2020" ,
				            
							"testingaverage":"15,277" ,
							"peopletested":"1,239,925" ,
							"positivity":"10.6%" ,
							"hospitalizations":"2,037" ,                    
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



