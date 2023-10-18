class Graph {
    constructor(public values: number[], public name: string) {}
  
    draw(): void {
      console.log(`Drawing a graph: ${this.name}`);
    }
  }
  
  class LineGraph extends Graph {
    draw(): void {
      console.log(`Drawing a line graph: ${this.name}`);
      console.log(`Values: ${this.values.join(', ')}`);
    }
  }
  
  class Chart extends Graph {
    draw(): void {
      console.log(`Drawing a chart: ${this.name}`);
      console.log(`Values: ${this.values.join(', ')}`);
    }
  }
  
  class Bar extends Graph {
    draw(): void {
      console.log(`Drawing a bar graph: ${this.name}`);
      console.log(`Values: ${this.values.join(', ')}`);
    }
  }
  
  const lineGraph = new LineGraph([1, 2, 3, 4, 5], 'Line Graph 1');
  const chart = new Chart([10, 20, 30, 40, 50], 'Chart 1');
  const bar = new Bar([5, 10, 15, 20, 25], 'Bar Graph 1');
  
  const graphs: Graph[] = [lineGraph, chart, bar];
  
  for (const graph of graphs) {
    graph.draw();
  }
  