import React from 'react'
import { useRef } from 'react'
import { useState,useEffect } from 'react'
import * as d3 from 'd3'

const Result = ({mess,sco}) => {
  const [data]=useState(sco)
  const svgRef=useRef()
  useEffect(() => {
    const w=600
    const h=150
    const svg=d3.select(svgRef.current)
          .attr('width',w)
          .attr('height',h)
          .style('background','#d3d3d3')
          .style('margin-top','10')
          .style('overflow','visible')
    
    const xScale=d3.scaleLinear()
          .domain([0,data.length-1])
          .range([0,w])
    const yScale=d3.scaleLinear()
          .domain([0,20])
          .range([h,0])
    const genrateScaledLine=d3.line()
          .x((d,i)=>xScale(i))
          .y(yScale)
          // .curve(d3.curveCardinal)
    const xAxis=d3.axisBottom(xScale)
          .ticks(data.length)
          .tickFormat(i=>i+1)
    const yAxis=d3.axisLeft(yScale)
          .ticks(5)
    svg.append('g')
          .call(xAxis)
          .attr('transform',`translate(0,${h})`)
    svg.append('g')
          .call(yAxis)
    svg.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", 300)
    .attr("y", 180)
    .text("No. of attempts");
    svg.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("y", -40)
    .attr("x",-50)
    .attr("dy", ".75em")
    .attr("transform", "rotate(-90)")
    .text("Score");
    svg.selectAll('.line')
    .data([data])
    .join('path')
        .attr('d',d=>genrateScaledLine(d))
        .attr('fill','none')
        .attr('stroke','blue')
  }, [data])
  
  return (
    <>
     <div className="container my-4 w-50">
      <h3>Result : {mess}</h3>
      <svg ref={svgRef} ></svg>
     </div>
    </>
  )
}

export default Result