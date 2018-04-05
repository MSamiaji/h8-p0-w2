var nama = 'Samiaji';
var peran = 'Tabib';
if (nama === '' && peran === '' ) {
	console.log('"Nama Harus Diisi!"'); 
}else if (nama == nama && peran === '' ){
	console.log('"Halo '+ nama +' , Pilih peranmu untuk memulai game!"');
}else if (nama == nama && peran == 'Ksatria' ){
	console.log('"Selamat datang di Dunia proxytia, '+ nama+'"\n');
	console.log('"Halo '+peran+' '+ nama+', kamu dapat menyerang dengan senjatamu!"');
}else if (nama == nama  && peran == 'Tabib' ){
	console.log('"Selamat datang di Dunia proxytia, '+ nama+'"\n');
	console.log('"Halo '+peran+' '+ nama+', kamu akan membantu temanmu yang terluka."');
}else if (nama == nama && peran == 'Penyihir' ){
	console.log('"Selamat datang di Dunia proxytia, '+ nama+'"\n');
	console.log('"Halo '+peran+' '+ nama+', ciptakan keajaiban yang membantu kemenanganmu!"');
}