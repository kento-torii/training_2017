var appear_flag=false;
$( function() {
	//対戦待機ダイアログ
	if(appear_flag==false){
	    $('#wait_dialog').dialog({
	    	title:"対戦待機",
	    	closeOnEscape:false,//エスケープキーでとじないように
	    	modal:true,
	    	dialogClass:"no-close",//×ボタンを消す処理
	    	buttons:[
	    		{
	    			text:"やめる",
	    			id:"open_button",
	    			click:function(){
	    				$(this).dialog('close');
	    				$( '#cancel_confirmation_dialog' ) . dialog( 'open' );
	    			}
	    		}
			]
	    });
	}
    //対戦者が現れた時のダイアログ
    $('#battle_confirmation_diaglog').dialog({
    	title:"対戦開始",
    	closeOnEscape:false,//エスケープキーでとじないように
    	modal:true,
    	autoOpen:false,
    	dialogClass:"no-close",//×ボタンを消す処理
    	buttons:[
    		{
    			text:"はじめる",
    			id:"open_button",
    			click:function(){
    				$(this).dialog('close');
    			}
    		}
		]
    });

  //キャンセル確認ダイアログ
    $('#cancel_confirmation_dialog').dialog({
    	autoOpen:false,
    	dialogClass:"no-close",//×ボタンを消す処理
    	closeOnEscape:false,//エスケープキーでとじないように
    	title:"対戦をキャンセルします",
    	modal:true,
    	buttons:{
    		"OK":function(){
    			$(this).dialog('close');
    			window.location.href = "./4_menu.html";
    		},
    		"キャンセル":function(){
	       		$(this).dialog('close');
	       		$( '#wait_dialog' ) . dialog( 'open' );
	       	}
		}
    });

    //投了確認ダイアログ
    $( '#resign_dialog' ) . dialog( {
        title:"投了します",
        closeOnEscape:false,//エスケープキーでとじないように
        dialogClass:"no-close",//×ボタンを消す処理
        resizable:false,//サイズを変えられないように
        modal:true,//表示中はほかの処理をいじれないように
    	autoOpen: false,//勝手に開かないように
        buttons:{
        	"はい":function(){
        		$(this).dialog('close');
        		$('#result_dialog').dialog('open');
        	},
        	"いいえ":function(){
        		$(this).dialog('close');
        	}
        }
    } );

    //投了ボタンが押されたのを検知する。
    $( '#resign_button' ) . click( function() {
        $( '#resign_dialog' ) . dialog( 'open' );
    } );

    //勝敗表示ダイアログの処理
    $('#result_dialog').dialog({
    	autoOpen:false,
    	dialogClass:"no-close",//×ボタンを消す処理
    	closeOnEscape:false,//エスケープキーでとじないように
    	title:"リザルト",
    	modal:true,
    	dialogClass:"no-close",
    	buttons:{
    		"OK":function(){
	       		$(this).dialog('close');
	       		window.location.href = "./4_menu.html";
	       	}
		}
    });
    //退出ダイアログの処理
    $('#leaving_dialog').dialog({
    	autoOpen:false,
    	dialogClass:"no-close",//×ボタンを消す処理
    	closeOnEscape:false,//エスケープキーでとじないように
    	title:"退出します",
    	modal:false,
    	buttons:{
    		"OK":function(){
	       		$(this).dialog('close');
	       		window.location.href = "./4_menu.html";
	       	},
	       	"キャンセル":function(){
	       		$(this).dialog('close');
	       	}
		}
    });

    //スキップボタンが押された時の処理
    $('#skip_button').click(function(){
    	window.location.href = "./5_2_othello.html";
    });
    $('#leaving_button').click(function(){
    	$( '#leaving_dialog' ) . dialog( 'open' );
    });
    //
} );

//1秒後に変える モック用処理
window.setTimeout("battle_start()", 3000);

//対戦者が現れた時のダイアログ
function battle_start(){
	$('#wait_dialog').dialog('close');
	$('#battle_confirmation_diaglog').dialog('open');
	$('#cancel_confirmation_dialog').dialog('close');
}

//とりあえずの処理
function transition(){
	window.location.href = "#";
}
function transition_x(){
	window.location.href = "./5_2_othello.html";
}