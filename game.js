var game = function(){
	var i, j,
	//returns a random val of an array
	randArray = function(arr){
		return arr[Math.floor(Math.random()*arr.length)];
	},
	checkGame = function(){
		//TODO check game status
	},
	randomFill = function(){
		var rand = Math.floor(Math.random()*ref.length);
		if(!ref[rand]){
			g.board[parseInt(rand/len)][rand%(len)] = randArray([2,2,2,4]);
			ref[rand] = true;
		}else{
			return randomFill();
		}
		if(ref.indexOf(false) === -1){
			checkGame();
		}
	},
	len = 4,
	ref = [],
	g = {
		status : 1,
		points : 0,
		board :[],
		init : function(size,fill){
			len = 4 || size;
			this.board = new Array(len);
			for (i=0;i<len;i++){
				this.board[i] = new Array(len);
			}
			for (i in this.board){
				for (j = 0; j < len; j++){
					this.board[i][j] = -1;
					ref.push(false)
				}
			}
			for(i=0;i<fill;i++)randomFill();
			console.log(this.board)
		},
		move : function(side){
			if(!/[LURD]/.test(side))return false;
			var mv = {};
			mv[side] = true;
			var i,j, mvd = false;
			var h = 0;//horizontal
			var v = 0;//vertical
			for((i = mv.D ? len -1 : 0); (mv.D ? (i >= 0) : (i < len) );mv.D ? i-- : i++){
				for((j = mv.R ? len -1 : 0); ( mv.R ? (j >= 0) : (j < len) ); mv.R ? j-- : j++){
					if(this.board[i][j] === -1){
						h = mv.L ? 1 : mv.R ?  -1 : 0;
						v = mv.U ? 1 : mv.D ?  -1 : 0;
						while(this.board[i+v] && this.board[i+v][j+h]){
							if(this.board[i+v][j+h] !== -1){
								this.board[i][j] = this.board[i+v][j+h];
								ref[i*len+j] = true;
								this.board[i+v][j+h] = -1;
								ref[((i+v)*len)+(j+h)] = false;
								mvd = true;
								break;
							}
							mv.L ? ++h : mv.R ?  --h : "";
							mv.U ? ++v : mv.D ?  --v : "";
						}
					}
					if(this.board[i][j] !== -1){
						h = mv.L ? 1 : mv.R ?  -1 : 0;
						v = mv.U ? 1 : mv.D ?  -1 : 0;
						while(this.board[i+v] && this.board[i+v][j+h]){
							if(this.board[i][j] === this.board[i+v][j+h]){
								this.board[i][j] *= 2;
								points += this.board[i][j];
								this.ref[i*len+j] = true;
								this.board[i+v][j+h] = -1;
								ref[((i+v)*len)+(j+h)] = false;
								mvd = true;
								break;
							}
							if(this.board[i+v][j+h] !== -1)break;
							mv.L ? ++h : mv.R ?  --h : "";
							mv.U ? ++v : mv.D ?  --v : "";
						}
					}
				}
			}
			if(mvd)return randomFill();
		}
	};
	return g;
}