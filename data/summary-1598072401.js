$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "229,054",
				            "death": "5,491" ,
				            "dailycount": "1,759",
				            "dailydeath": "46" ,
				            "date":"08/21" ,
				            "info":"through 8:00pm 08/20/2020" ,
				            
							"testingaverage":"16,523" ,
							"peopletested":"2,153,941" ,
							"positivity":"5.5%" ,
							"hospitalizations":"1,347" ,                    
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



