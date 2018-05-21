<style lang="less" scoped>
	.cd_targt{
		height:0.6rem;
		width:100%;
		position: relative;
		p{
			font-family: PingFangSC-Medium;
			font-size: 0.3rem;
			color: #000000;
			letter-spacing: 2px;
			display: inline-block;
			position: absolute;
			left:0.48rem;
			top:0.03rem;
		}
		span{
			display: inline-block;
			width:0.08rem;
			height:0.36rem;
			background: #378AD6;
			position: absolute;
			left:0.3rem;
			top:0.12rem;
		}
	}
	.target_table{
		font-family: PingFangSC-Regular;
		font-size: 0.3rem;
		color: #999999;
		letter-spacing: 2px;
		width:100%;
		background: #FFFFFF;
		td:nth-child(1),td:nth-child(3){
			padding-left: 0.3rem;
		}
		td:nth-child(2),td:nth-child(4){
			text-align: right;
			// padding-right: 0.3rem;
			color: #000000;
			font-size: 0.24rem;
		}
	}
	.cd_tit{
		width: 100%;
		padding:0.3rem;
		padding-top: 0;
		box-sizing: border-box;
		background: #FFFFFF;
		line-height: 0.3rem;
		p{
			display: inline-block;
			font-family: PingFangSC-Regular;
			font-size: 0.3rem;
			color: #000000;
			letter-spacing: 2px;
		}
	}
	.cd_partner{

	}
</style>
<template>
	<div>
		<div class="cd_targt">
			<span></span>
			<p>主要指标</p>
		</div>
		<table class="target_table">
			<tr>
				<td>市盈率</td>
				<td>{{Fvaluep}}</td>
				<td>市净率</td>
				<td>{{Tvaluep}}</td>
			</tr>
			<tr>
				<td>每股收益</td>
				<td>{{PerShare}}</td>
				<td>每股净资产</td>
				<td>{{NetAssets}}</td>
			</tr>
			<tr>
				<td>营业收入</td>
				<td>{{Income}}</td>
				<td>同比增长</td>
				<td>{{datas.IncomeGrowth}}</td>
			</tr>
			<tr>
				<td>净利润</td>
				<td>{{NetProfit}}</td>
				<td>同比增长</td>
				<td>{{datas.NetProfitGrowth}}</td>
			</tr>
		</table>
		<div class="cd_targt">
			<span></span>
			<p>概念题材</p>
		</div>
		<div class="cd_tit">
			<p>最相关概念:{{RelevantConcept}}</p>
			<p>龙头股:{{LeadingStock}}</p>
			<p>题材要点:{{ThemePoints}}</p>
		</div>
		<div class="cd_targt">
			<span></span>
			<p>股本股东</p>
		</div>
		<div class="cd_partner">
			<table class="target_table">
			<tr>
				<td>总股本</td>
				<td>{{TotalShareCapital}}</td>
			
			</tr>
			<tr>
				<td>流通股本</td>
				<td>{{CirculatingCapital}}</td>
			</tr>
			<tr>
				<td>股东人数</td>
				<td>{{Shareholder}}万人</td>
			</tr>
			<tr>
				<td>第一大股东</td>
				<td>{{FirstShareholder}}</td>
			</tr>
			<tr>
				<td>前十大股东占比</td>
				<td>{{TenShareholder}}</td>
			</tr>
			<tr>
				<td>机构投资者占比</td>
				<td>{{Investor}}</td>
			</tr>
		</table>
		</div><br><br>
	</div>
</template>
<script>
	export default {
	    name: 'v-company',
	    props:['isreload'],
	    data(){
	    	return{
	    		datas:'',
	    		Fvaluep:'-',
    			Tvaluep:'-',
    			PerShare:'-',
    			NetAssets:'-',
    			Income:'-',
    			IncomeGrowth:'-',
    			NetProfit:'-',
    			NetProfitGrowth:'-',
    			RelevantConcept:'-',
    			LeadingStock:'-',
    			ThemePoints:'-',
    			TotalShareCapital:'-',
    			CirculatingCapital:'-',
    			Shareholder:'-',
    			FirstShareholder:'-',
    			TenShareholder:'-',
    			Investor:'-',
	    	}
	    },
	    created(){
	    	this.getdata();
		},
		activated(){
			if(this.isreload==true){
	    		this.getdata();
	    	}
		},
		methods:{
			getdata(){
				//获取公司概况
				//显示loading
				this.$vux.loading.show({text: '正在加载'})
				this.$axios.post('GetOverview', {
				      code:this.$route.query.code//this.$route.query.code '000697'
				  	})
				  	.then((response)=>{
				  		// 隐藏loading
						this.$vux.loading.hide()
				    	if(response.data.Success=="true"){
				    		if(response.data.Data){
				    			this.datas=response.data.Data;
				    			this.Fvaluep=this.datas.Fvaluep;
				    			this.Tvaluep=this.datas.Tvaluep;
				    			this.PerShare=this.datas.PerShare;
				    			this.NetAssets=this.datas.NetAssets;
				    			this.Income=this.datas.Income;
				    			this.IncomeGrowth=this.datas.IncomeGrowth;
				    			this.NetProfit=this.datas.NetProfit;
				    			this.NetProfitGrowth=this.datas.NetProfitGrowth;
				    			this.RelevantConcept=this.datas.RelevantConcept;
				    			this.LeadingStock=this.datas.LeadingStock;
				    			this.ThemePoints=this.datas.ThemePoints;
				    			this.TotalShareCapital=this.datas.TotalShareCapital;
				    			this.CirculatingCapital=this.datas.CirculatingCapital;
				    			this.Shareholder=this.datas.Shareholder;
				    			this.FirstShareholder=this.datas.FirstShareholder;
				    			this.TenShareholder=this.datas.TenShareholder;
				    			this.Investor=this.datas.Investor;
				    		}
				    	}else{
				    		this.$router.push({
					    		path:'fault',
					    		query:{
					    			msg:response.data.Error_msg
					    		}
					    	});
				    	}
				  	})
				  	.catch((error)=>{
						;
				    	console.log(error);
				   	});
			}
		}
	}
</script>