---
title: Confocal non-line-of-sight imaging based on the light-cone transform 
subtitle: Nature (2018) 
brief: A confocal scanning technique solves the reconstruction problem of non-line-of-sight imaging to give fast and high-quality reconstructions of hidden objects. 
authors: Matthew O'Toole, <strong>David B. Lindell</strong>, Gordon Wetzstein 
layout: pub 
date: 2018-03-05
img: nature2018otoole.png
thumbnail: nature2018otoole.png
permalink: publications/nlos-lct
alt: image-alt
pdf-link: http://rdcu.be/ImAZ
supp-link: https://www.nature.com/articles/nature25489#supplementary-information
video-link: https://www.youtube.com/watch?v=lCJN_RwJPew
social: 
    - title: Stanford News  
      url: https://news.stanford.edu/2019/07/29/seeing-moving-objects-around-corners/ 
      img: stanford-news-service-logo.png  
    - title: Wired 
      url: https://www.wired.com/story/wanna-see-around-corners-better-get-yourself-a-laser/ 
      img: wired.png
    - title: The Guardian  
      url: https://www.theguardian.com/technology/2018/mar/05/self-driving-cars-may-soon-be-able-to-see-around-corners 
      img: guardian.png
    - title: Quanta Magazine
      url: https://www.quantamagazine.org/the-new-science-of-seeing-around-corners-20180830/
      img: quanta.png 

---
**Experimental Setup:** The imaging system records the time it takes for laser light to scatter off the wall, reflect off the hidden bunny, and return to the wall. By acquiring these timing measurements for different laser positions on the wall, the 3D geometry of the hidden object can be reconstructed.
- - -

**A confocal scanning technique solves the reconstruction problem of non-line-of-sight imaging to give fast and high-quality reconstructions of hidden objects.**
{: style="text-align: left;" }
- - -

### Abstract
- - -
Imaging objects hidden from a camera’s view is a problem of fundamental importance to many fields of research with applications in robotic vision, defense, remote sensing, medical imaging, and autonomous vehicles. Non-line-of-sight (NLOS) imaging at macroscopic scales has been demonstrated by scanning a visible surface with a pulsed laser and time-resolved detector. Whereas light detection and ranging (LIDAR) systems use such measurements to recover the shape of visible objects from direct reflections, NLOS imaging aims at reconstructing the shape and albedo of hidden objects from multiply scattered light. Despite recent advances, NLOS imaging has remained impractical due to the prohibitive memory and processing requirements of existing reconstruction algorithms, and the extremely weak signal of multiply scattered light. 
{: style="text-align: left;" }

Here we show that confocalizing the scanning procedure provides a means to address these key challenges. Confocal scanning facilitates the derivation of a novel closed-form solution to the NLOS reconstruction problem, which requires computational and memory resources that are orders of magnitude fewer than previous reconstruction methods and recovers hidden objects at unprecedented image resolutions. Confocal scanning also uniquely benefits from a sizeable increase in signal and range when imaging retroreflective objects. We quantify the resolution bounds of NLOS imaging, demonstrate real-time tracking capabilities, and derive efficient algorithms that incorporate image priors and a physically-accurate noise model. Most notably, we demonstrate successful outdoor experiments for NLOS imaging under indirect sunlight.
{: style="text-align: left;" }

### Stanford News 
- - -
<div class="embed-responsive embed-responsive-16by9">
<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/KnGQEzB9u_0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" class="lazy_load" allowfullscreen></iframe>
</div>
<br>

### Overview Video
- - -
<div class="embed-responsive embed-responsive-16by9">
<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/lCJN_RwJPew" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<br>

### Visualizations
- - -
<div class="row">
<div class="col-md-8 mx-auto" style="">
<img src="http://www.computationalimaging.org/wp-content/uploads/2018/03/output.gif" style="padding: 10px;" class="img-fluid" alt="">
</div>
</div>

**Measurements and Reconstruction:** The captured measurements can be played back as a video, showing light splashing across the wall as it scatters back from the hidden object. Using a mathematical transform and deconvolution algorithm, the hidden object is recorded from these echoes of light.
{: style="text-align: left;" }

<div class="row">
<div class="col-md-8 mx-auto" style="">
<img src="http://www.computationalimaging.org/wp-content/uploads/2018/03/outdoor.gif" style="padding: 10px;" class="img-fluid" alt="">
</div>
</div>

**Outdoor Experiment:** Non-line-of-sight imaging is demonstrated outdoors. The imaging system captures measurements in indirect sunlight and robustly reconstructs the hidden “S” shape.
{: style="text-align: left;" }

### Scenes 
- - -
<div class="row">
<div class="col-xs-4 col-md-4">
<img src="/assets/img/publication/nature2018otoole/scene0.png" style="padding: 10px;" class="img-fluid" alt="">
<p> Bunny (simulated) </p>
</div>
<div class="col-xs-4 col-md-4">
<img src="/assets/img/publication/nature2018otoole/scene5.png" style="padding: 10px;" class="img-fluid" alt="">
<p>Mannequin</p>
</div>
<div class="col-xs-4 col-md-4">
<img src="/assets/img/publication/nature2018otoole/scene6.png" style="padding: 10px;" class="img-fluid" alt="">
<p>Exit Sign</p>
</div>
</div>
<div class="row">
<div class="col-xs-4 col-md-4">
<img src="/assets/img/publication/nature2018otoole/scene7.png" style="padding: 10px;" class="img-fluid" alt="">
<p>Letters "SU"</p>
</div>
<div class="col-xs-4 col-md-4">
<img src="/assets/img/publication/nature2018otoole/scene8.png" style="padding: 10px;" class="img-fluid" alt="">
<p>Outdoor Letter "S"</p>
</div>
<div class="col-xs-4 col-md-4">
<img src="/assets/img/publication/nature2018otoole/scene9.png" style="padding: 10px;" class="img-fluid" alt="">
<p>Diffuse "S"</p>
</div>
</div>
### Reconstructions 
- - -
<div class="row">
<div class="col-xs-4 col-md-4">
<img src="/assets/img/publication/nature2018otoole/spin_0.gif" style="padding: 10px;" class="img-fluid" alt="">
</div>
<div class="col-xs-4 col-md-4">
<img src="/assets/img/publication/nature2018otoole/spin_5.gif" style="padding: 10px;" class="img-fluid" alt="">
</div>
<div class="col-xs-4 col-md-4">
<img src="/assets/img/publication/nature2018otoole/spin_6.gif" style="padding: 10px;" class="img-fluid" alt="">
</div>
</div>
<div class="row">
<div class="col-xs-4 col-md-4">
<img src="/assets/img/publication/nature2018otoole/spin_7.gif" style="padding: 10px;" class="img-fluid" alt="">
</div>
<div class="col-xs-4 col-md-4">
<img src="/assets/img/publication/nature2018otoole/spin_8.gif" style="padding: 10px;" class="img-fluid" alt="">
</div>
<div class="col-xs-4 col-md-4">
<img src="/assets/img/publication/nature2018otoole/spin_9.gif" style="padding: 10px;" class="img-fluid" alt="">
</div>
</div>
<br>

### Media
- - -
<div class="row">
<div class="col-md-8 mx-auto" style="transform: translateX(30px);">
<img src="http://www.computationalimaging.org/wp-content/uploads/2018/03/laser.gif" style="padding: 10px;" class="img-fluid" alt="">
</div>
</div>
Matthew O’Toole operating the laser scanning system (credit: Kurt Hickman / Stanford News)
{: style="text-align: left;" }

<div class="row">
<div class="col-md-8 mx-auto" style="transform: translateX(30px);">
<img src="http://www.computationalimaging.org/wp-content/uploads/2018/03/scanning.gif" style="padding: 10px;" class="img-fluid" alt="">
</div>
</div>
An overview of the hardware setup (credit: Kurt Hickman / Stanford News)
{: style="text-align: left;" }

<div class="row">
<div class="col-md-8 mx-auto" style="">
<img src="http://www.computationalimaging.org/wp-content/uploads/2018/03/corner_8710.jpg" style="padding: 10px;" class="img-fluid" alt="">
</div>
</div>
Graduate student David Lindell and postdoctoral researcher Matthew O’Toole work in the lab with assistant professor Gordon Wetzstein (credit: Linda A. Cicero / Stanford News).
{: style="text-align: left;" }

<div class="row">
<div class="col-md-8 mx-auto" style="">
<img src="http://www.computationalimaging.org/wp-content/uploads/2018/03/corner_8642.jpg" style="padding: 10px;" class="img-fluid" alt="">
</div>
</div>
Graduate student David Lindell works in the lab with assistant professor Gordon Wetzstein (credit: Linda A. Cicero / Stanford News).
{: style="text-align: left;" }

<div class="row">
<div class="col-md-8 mx-auto" style="">
<img src="http://www.computationalimaging.org/wp-content/uploads/2018/03/corner_8655.jpg" style="padding: 10px;" class="img-fluid" alt="">
</div>
</div>
Graduate student David Lindell and postdoctoral researcher Matthew O’Toole calibrating the system (credit: Linda A. Cicero / Stanford News).
{: style="text-align: left;" }

### Code and Datasets
<ul class="" style="font-size: 22px; list-style: none; transform: translateX(-20px);">
<li><a href="https://drive.google.com/a/stanford.edu/file/d/1OoZ4JfkXY0bIGlb4dT22YjhhwplZjQOc/view?usp=sharing">LCT MATLAB code and data</a></li>
<li><a href="https://drive.google.com/a/stanford.edu/file/d/1XoYFqj5T23tFODBppzEOwXQjaUMQfmcH/view?usp=sharing">Iterative LCT MATLAB code and data</a></li>
<li><a href="https://drive.google.com/a/stanford.edu/file/d/1sXxng7CBxe-Rp-3BfhOJvnDc5v8hE9gK/view?usp=sharing">High-resolution simulated bunny data</a></li>
</ul>

### Acknowledgments
- - -
We thank Kai Zang for his expertise and helpful advice related to the SPAD sensor. We also thank Brian A. Wandell, Julie Chang, Isaac Kauvar, and Nitish Padmanaban for reviewing the manuscript. M.O. is supported by the Government of Canada through the Banting Postdoctoral Fellowships program. D.B.L. is supported by a Stanford Graduate Fellowship in Science and Engineering. G.W. is supported by a National Science Foundation CAREER award (IIS 1553333), a Terman Faculty Fellowship, the Center for Automotive Research at Stanford (CARS), and by the KAUST Office of Sponsored Research through the Visual Computing Center CCF grant.
{: style="text-align: left;" }

### Citation
- - -
```
{% raw %}
@article{OToole:2018:ConfocalNLOS,
author = {Matthew O’Toole and David B. Lindell and Gordon Wetzstein},
title = {{Confocal Non-Line-of-Sight Imaging Based on the Light-Cone Transform}},
journal = {Nature},
year = {2018},
}
{% endraw %}
```
{: style="text-align: left;" }


