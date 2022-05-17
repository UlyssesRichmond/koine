
function kn_widthCont(){
  return parseInt( window.innerWidth *0.8 );
}

function kn_color( name ){
  var code = '#FFFFFF';
  if (name == 'white'){ code = '#FFFFFF'; }
  if (name == 'blue'){ code = '#4b6cbf'; }
  if (name == 'red'){ code = '#bf644b'; }
  if (name == 'green1'){ code = '#a6bf4b'; }
  if (name == 'green2'){ code = '#668c4a'; }
  if (name == 'yellow'){ code = '#f2c53d'; }
  if (name == 'gray1'){ code = '#e5e5e3'; }
  if (name == 'gray2'){ code = '#d6d6d3'; }
  if (name == 'gray3'){ code = '#b1b1ac'; }
  return code;
}

function kn_absolute (idParent, idChild, text, top, left, height, width, radius, color, func){
  var parent = document.getElementById( idParent );
  var div = parent.appendChild(document.createElement('div'));
    if (idChild!=null){ div.id = idChild; }
    if (text!=null ){ div.innerText = text; }
    if (text!=null && width<200){  //textを直接書き込むのは、ボタンづくりの場合。ここでボタンの典型設定を記載
      div.style.display='flex';
      div.style.flexDirection='column'; //子要素の配列方向：縦方向に   
      div.style.flexWrap='no-wrap'; //折り返し：しない
      div.style.justifyContent='senter';  //左右：始点に集める
      div.style.alignItems='center';  //上下：始点に集める
      div.style.alignContent='center';  //複数行になった時の行の揃え方
    } else {
      div.style.display='flex';
      div.style.flexDirection='column'; //子要素の配列方向：縦方向に   
      div.style.flexWrap='no-wrap'; //折り返し：しない
      div.style.justifyContent='flex-start';  //左右：始点に集める
      div.style.alignItems='flex-start';  //上下：始点に集める
      div.style.alignContent='flex-start';  //複数行になった時の行の揃え方
    }
    div.style.position='absolute';
    div.style.top = top+'px';
    div.style.left = left+'px';
    div.style.backgroundColor= color;
    div.style.width= width+'px';
    div.style.height = height+'px';
    div.style.borderRadius=radius+'px';
    
    if (func!=null){ div.addEventListener('click', func); }
    div.addEventListener('click', function(e){ console.log(this.id); } )
  return div;
}

function kn_input(parentId, uniqueName, text, top, left, height, width, bgColor, type, func){

  kn_absolute (parentId, parentId+'_'+uniqueName+'_mj', null, top, left, height, width, 5, bgColor, null);
  if(text != null){
    kn_absolute (parentId+'_'+uniqueName+'_mj', parentId+uniqueName+'_label', text, 0, 0, 30, 100, 5, bgColor, null);
    if (height > 40){ //幅がある時は、上下に配置する
      kn_absolute (parentId+'_'+uniqueName+'_mj', parentId+'_'+uniqueName+'_mn', null, 30, 0, height-30, width, 5, bgColor, null);
    } else {
      kn_absolute (parentId+'_'+uniqueName+'_mj', parentId+'_'+uniqueName+'_mn', null, 0, 100, height, width-100, 5, bgColor, null);
    }
  } else {
    kn_absolute (parentId+'_'+uniqueName+'_mj', parentId+'_'+uniqueName+'_mn', null, 0, 0, height, width, 5, bgColor, null); 
  }

  var div = document.getElementById( parentId+'_'+uniqueName+'_mn' );

  if(type=='select'){
    var input = div.appendChild( document.createElement('select') );
    input.id = parentId+'_'+uniqueName+'_'+type;
    input.style.position='relative';
    input.style.margin = '0px 10px';
    if (func!=null){ input.addEventListener('input', func); }
    return input;
  }
  else if (type=='textarea'){
    var input = div.appendChild( document.createElement('textarea') );
    input.id = parentId+'_'+uniqueName+'_'+type;
    input.style.position='relative';
    input.style.margin = '0px 10px';
    input.rows= (height/22).toString();
    input.cols= (width/8).toString();
    if (func!=null){ input.addEventListener('input', func); }
    return input;
  }
  else {
    var input = div.appendChild( document.createElement('input') );
    input.size = (width/10).toString();
    input.type = type;
    input.id = parentId+'_'+uniqueName+'_'+type;
    input.style.position='relative';
    input.style.margin = '0px 10px';
    if (func!=null){ input.addEventListener('input', func); }
    return input;
  }
}



/*


function kn_absolute2 (idParent, idChild, text, top, left, height, width, radius, color, func){
  var parent = document.getElementById( idParent );
  var div = parent.appendChild(document.createElement('div'));
    if (idChild!=null){ div.id = idChild; }
    if (text!=null ){ div.innerText = text; }
    if (text!=null && width<200){  //textを直接書き込むのは、ボタンづくりの場合。ここでボタンの典型設定を記載
      div.style.display='flex';
      div.style.flexDirection='column'; //子要素の配列方向：縦方向に   
      div.style.flexWrap='no-wrap'; //折り返し：しない
      div.style.justifyContent='senter';  //左右：始点に集める
      div.style.alignItems='center';  //上下：始点に集める
      div.style.alignContent='center';  //複数行になった時の行の揃え方
    } else {
      div.style.display='flex';
      div.style.flexDirection='column'; //子要素の配列方向：縦方向に   
      div.style.flexWrap='no-wrap'; //折り返し：しない
      div.style.justifyContent='flex-start';  //左右：始点に集める
      div.style.alignItems='flex-start';  //上下：始点に集める
      div.style.alignContent='flex-start';  //複数行になった時の行の揃え方
    }
    div.style.position='absolute';
    div.style.top = top+'px';
    div.style.left = left+'px';
    div.style.backgroundColor= color;
    div.style.width= width+'px';
    div.style.height = height+'px';
    div.style.borderRadius=radius+'px';


    div.className='material-symbols-outlined';
    
    if (func!=null){ div.addEventListener('click', func); }
    div.addEventListener('click', function(e){ console.log(this.id); } )
  return div;
}
*/




//根絶やし関数
function divInfanticide (parentId){
  var parent = document.getElementById( parentId );
  while( parent.firstChild ){ parent.removeChild( parent.firstChild );  }
}
