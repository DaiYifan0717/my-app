/**
 * Created by Rychou on 2018/4/19.
 */
import React, {Component} from  'react'
import $ from 'jquery'
import url from './audio/Heaven.mp3'

class Main extends Component{
    state={
        date:{},
    }
    componentDidMount(){
        this.print();
        setInterval(()=>{
                this.time(2017,7,27)
            },1000
        )
        var audio = document.getElementById("audio");
        setTimeout(()=>audio.play(),9200)
    }
    print = ()=>{
        $.fn.autotype = function() {
            var _this=$(this);
            var str=_this.html();
            // 正则替换代码行之间添加的多个空格，不去除换行输出会有明显的停顿：实际是在输出多个空格
            str=str.replace(/(\s){2,}/g,"$1");
            var index = 0;
            $(this).html('');
            var timer = function fn() {
                var args=arguments;
                var current = str.slice(index, index+1);
                // html标签完整输出,如：<p>
                if (current == '<'){
                    index = str.indexOf('>', index) + 1;
                }
                else{
                    index++;
                }
                //位运算符: 根据setInterval运行奇偶次来判断是否加入下划线字符“_”，使输入效果更逼真
                if (index < str.length-1){ //打印字符倒数第2个字符开始，不加下划线字符，以防止结束符可能会多输出一下划线字符
                    _this.html(str.substring(0, index) + (index & 1 ? '_' : ''));
                }else{
                    _this.html(str.substring(0, index));
                    clearTimeout(timer);
                };
                setTimeout(fn,100)
            };
            // 延迟1s开始
            setTimeout(timer,1000);
        };
        $("#autotype").autotype();
    }
    time =(year,month,day)=>{
        var dateNow = new Date();
        var dateJNR = new Date(year,month-1,day);
        // var anniversary = parseInt((dateNow - dateJNR) / (365*24*3600*1000))
        var d = parseInt((dateNow - dateJNR)/(24*3600*1000));
        var hour = parseInt(((dateNow - dateJNR)/(3600*1000))%24);
        var minute = parseInt((dateNow - dateJNR)/(1000*60)%60);
        var second = parseInt((dateNow - dateJNR)/1000%60);
        this.setState({date:{d:d,hour:hour,minute:minute,second:second}});
    };
    render(){
        const date =()=>{
            if (this.state.date.d!==undefined){
                const {d,hour,minute,second} = this.state.date
                return (<p>我们已经一起走过了: <span className="date-text">{d}</span> 天 <span className="date-text">{hour}</span> 小时 <span className="date-text">{minute}</span> 分 <span className="date-text">{second}</span> 秒 </p>
                )
            }
        }
        return(
            <div className="App animated bounceInLeft">
            <div className="date">{date()}</div>
            <div className="content" id="autotype">
                <h1>♥我亲爱的宝贝坨！♥</h1>
                <p>祝我们5.20快乐呀！这个小网页就作为我送给你的5.20小礼物啦！</p>
                <p>我们先来放首歌好啦，放一首你说我们要在结婚的时候放的《Heaven》！</p>
                <p>今天是我们在一起的第二个5.20了。回想起2017年的7月，我真的无比感激能遇见你并成为你的另一半，和你在一起的每一天
                    都是那么美好。</p>
                <p>我们从长沙到武汉，去了泰国，意大利 * 3，瑞士，捷克，荷兰，西班牙，美国 * 2，德国, 对噢，还有一趟顺德美食之旅。
                    回想起来，世界上的很多地方都留下了我们的欢声笑语，留下了我们独特的回忆。</p>
                <p>前两天的我刚刚参加完毕业典礼，我也将进入到我人生的新一阶段了，成为社会人了哈哈。我会好好努力赚钱，多思考多挑战自己，
                    争取可以尽早做出属于我的辉煌事业！老婆你呢，就好好学习，顺利毕业，然后和我一起成为社会人，我们一起组建我们牛逼的
                    社会家庭了！♥</p>
                <p>辛苦你啦宝贝坨，让你陪我度过了600多天的异地恋生涯。聚少离多的日子，让每一次的相聚我们恨不得diang在一起。我非常非常
                    感激有你陪我走过这些日子，也希望我们之后会更加幸福，早日团聚！因为有你的地方比天堂更美♥</p>

                <p>We don’t have to go to heaven</p>
                <p>To feel like we’re in paradise</p>
                <p>Cause I feel like I’m in heaven</p>
                <p>Every time I look into your eyes</p>

                <p>希望你会喜欢我送给你的这份小礼物啦，因为第一次做，可能效果不是那么精美，但是呢，我超级爱你 ♥ 所以你必须喜欢！
                    下一次纪念日我会做个更炫酷的页面给你呀！请期待凡凡坨的下一部作品耶 ♥</p>

                <p>最后再引用一下这首歌的歌词：</p>
                <p>When I look into your eyes, woah oh</p>
                <p>I see more stars than the stars that are in the sky</p>
                <p>宝贝坨你就是我眼里那颗最璀璨的星星♥</p>

                <p>祝我们第二个5.20快乐啦，也预祝我们以后的每个5.20都能更加快乐！</p>
                <p>我爱你宝贝坨 ♥ I love you!</p>
                <div style={{textAlign:'right'}}>
                    <p>♥最最最爱你的凡凡坨♥</p>
                    <p>2019年5月20日</p>
                </div>
            </div>
                <audio id="audio" src={url}></audio>
            </div>

        )
    }
}
export default Main