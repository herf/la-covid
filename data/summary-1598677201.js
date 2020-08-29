$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "238,458",
				            "death": "5,732" ,
				            "dailycount": "1,509",
				            "dailydeath": "31" ,
				            "date":"08/28" ,
				            "info":"through 8:00pm 08/27/2020" ,
				            
							"testingaverage":"13,688" ,
							"peopletested":"2,257,457" ,
							"positivity":"5.6%" ,
							"hospitalizations":"1,168" ,                    
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



