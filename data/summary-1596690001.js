$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "197,912",
				            "death": "4,825" ,
				            "dailycount": "2,347",
				            "dailydeath": "68" ,
				            "date":"08/05" ,
				            "info":"through 8:00pm 08/04/2020" ,
				            
							"testingaverage":"16,986" ,
							"peopletested":"1,839,157" ,
							"positivity":"8.3%" ,
							"hospitalizations":"1,768" ,                    
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



