---
title: Non-line-of-sight imaging with partial occluders and surface normals 
subtitle: ACM Transactions on Graphics 2019 
brief: A new approach to non-line-of-sight imaging that estimates partial occlusions in the hidden volume along with surface normals.
authors: Felix Heide, Matthew O"Toole, Kai Zang, <strong>David B. Lindell</strong>, Steven Diamond, Gordon Wetzstein 
layout: pub 
date: 2019-07-14
img: tog2019heide.png
thumbnail: tog2019heide.png
permalink: publications/occlusion-nlos
alt: image-alt
pdf-link: https://drive.google.com/file/d/1JpuUYYrNvTlYyunvsVrBJZRdDJ5SVEed/view 
supp-link: https://drive.google.com/file/d/1Jq9-47B44eTJwLVwE0gweU1nw6lqB1kz/view
video-link: https://www.youtube.com/watch?v=nVoEZuFFMzA

---

**A new approach to non-line-of-sight imaging that estimates partial occlusions in the hidden volume along with surface normals.**
{: style="text-align: left;" }


### Video
- - -
<div class="embed-responsive embed-responsive-16by9">
<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/nVoEZuFFMzA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Abstract
- - -
Imaging objects obscured by occluders is a significant challenge for many applications. A camera that could “see around corners” could help improve navigation and mapping capabilities of autonomous vehicles or make search and rescue missions more effective. Time-resolved single-photon imaging systems have recently been demonstrated to record optical information of a scene that can lead to an estimation of the shape and reflectance of objects hidden from the line of sight of a camera. However, existing non-line-of-sight (NLOS) reconstruction algorithms have been constrained in the types of light transport effects they model for the hidden scene parts.
{: style="text-align: left;" }

We introduce a factored NLOS light transport representation that accounts for partial occlusions and surface normals. Based on this model, we develop a factorization approach for inverse time-resolved light transport and demonstrate high-fidelity NLOS reconstructions for challenging scenes both in simulation and with an experimental NLOS imaging system.
{: style="text-align: left;" }

### Slides
- - -
<iframe src="//www.slideshare.net/slideshow/embed_code/key/t2MyzgkClBKJD8" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;"  allowfullscreen> </iframe> 

### Datasets
- - -
It took a lot of effort to build and calibrate this hardware setup and to capture these data. Feel free to use the datasets in your own projects, but please acknowledge our work by citing the following papers:
{: style="text-align: left;" }

<ul class="list-inline" style="font-size: 22px;">
<li><a href="https://drive.google.com/file/d/1rIfzyJBT_EMeuP3d5yvouSVBnjCs4TCA/view">Dataset</a></li>
</ul>

<ul>
<li> <p> Matthew O’Toole, Felix Heide, David B. Lindell, Kai Zang, Steven Diamond, and Gordon Wetzstein. 2017. Reconstructing transient images from single-photon sensors. In Proc. CVPR. </p> </li>
<li> <p> Matthew O’Toole, David B. Lindell, and Gordon Wetzstein. 2018. Confocal non-line-of-sight imaging based on the light-cone transform. Nature 555, 7696, 338. </p></li>
<li><p> Felix Heide, Matthew O’Toole, Kai Zang, David B. Lindell, Steven Diamond, and Gordon Wetzstein. 2018. Non-line-of-sight Imaging with partial occluders and surface normals. ACM Trans. Graph.  </p></li>
<li><p> David B. Lindell, Gordon Wetzstein, and Matthew O’Toole. 2019. Wave-based non-line-of-sight Imaging using fast f−k migration. ACM Trans. Graph. (SIGGRAPH) 38, 4, 116.</p></li>
</ul>
{: style="text-align: left;" }

### Acknowledgments
- - -
The authors thank James Harris for fruitful discussions. D.B.L. is supported by a Stanford Graduate Fellowship in Science and Engineering. G.W. is supported by a Terman Faculty Fellowship and a Sloan Fellowship. Additional funding was generously provided by the National Science Foundation (CAREER Award IIS 1553333), the DARPA REVEAL program, the ARO (Grant W911NF-19-1-0120), the Center for Automotive Research at Stanford (CARS), and by the KAUST Office of Sponsored Research through the Visual Computing Center CCF grant.
{: style="text-align: left;" }

### Citation
- - -
```
{% raw %}
@article{Heide:2019:OcclusionNLOS,
author = {Felix Heide and Matthew O’Toole and Kai Zang and David B. Lindell and Steven Diamond and Gordon Wetzstein},
title = {Non-line-of-sight Imaging with Partial Occluders and Surface Normals},
journal = {ACM Trans. Graph.},
year = {2019}
}
{% endraw %}
```
{: style="text-align: left;" }


