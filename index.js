// making the chart element  see chart js docs
const ctx=document.getElementById("myChart").getContext("2d");
// declaring delay for the smooth transition
let delayed
// styling
// (xstart,ystart,xend yend)
let gradient=ctx.createLinearGradient(0,0,0,400);
// if nore colors needed write 0.2 for two if three then 0.4 and so forth
gradient.addColorStop(0,'rgba(255,64,64,1)');
// since only two colors we dirctly go to 1 from 0
gradient.addColorStop(1,"rgba(255,64,64,0.3)");


// years or monthsS
const labels=[
    "Jul21",
    "Aug21",
    "Sept21",
    "Oct21",
    "Nov21",
    "Dec21",
    "Jan22",
    "Feb22",
    "Mar22"
];




const data={
    // taking labels 
    labels,
    // data sets is an array inside again we have data
    datasets:[{
        //below data are actuall points on graphs in millions
        data:[14.9,13.5,14.1,13.5,13.2,14.0,14.5,15.0,16.0],
        // label at top showing what it is
        label:"Valorant Average Monthly PlayerBase",
        // fills area of graph
        fill:true,
        backgroundColor:gradient,
        borderColor:"#fff",
        pointBackgroundColor:"rgb(189,195,199)",
        // to make graph come in animated way
        // tension:0.2
    }]
}

// what kind of graph we want
const config={
    // pie donut, histo etc
    type:"line",
    // briging above const data
    data:data,
    options:{
        // inc pointsize
        radius:5,
        // label showing info should trigger in this area
        hitRadius:30,
        hoverRadius:12,
        // this ensures graph reponds to change in size of parent div
        responsive:true,
        // adding animation
        animation:{
            onComplete:()=>{
                delayed=true;
            },
            delay:(context)=>{
                let delay=0;
                if(context.type==="data" && context.mode==="default" && !delayed){
                    delay=context.dataIndex*300+context.datasetIndex*100;
                }
                return delay;
            }
        },
        // axis
        scales:{
            // y axis pe 
            y:{
                ticks:{
                    // taking value and attaching string to it
                    callback:function(value){
                        return value+" M";
                    }
                }
            }
        }
    }
};
// first parameter is the element i.e atucall canvas 
// second data
const myChart= new Chart(ctx,config);