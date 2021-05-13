---
title: "AutoInt: Automatic integration for fast neural volume rendering"
subtitle: CVPR 
brief: A new framework to integrate signals using implicit neural representations
authors: <strong>David B. Lindell*</strong>, Julien N. P. Martel*, Gordon Wetzstein
layout: pub 
date: 2021-03-01
img: cvpr2021lindell.png
thumbnail: cvpr2021lindell.png
permalink: publications/autoint
alt: image-alt
pdf-link: https://arxiv.org/abs/2012.01714 
video-link: https://www.youtube.com/watch?v=GYxFYbih0PU 
code-link: https://github.com/computational-imaging/automatic-integration

---

**A new framework to integrate signals using implicit neural representations.**
{: style="text-align: left;" }

### Video
- - -
<div class="embed-responsive embed-responsive-16by9">
<iframe class="embed-repsonsive-item" src="https://www.youtube.com/embed/GYxFYbih0PU " frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<br>

### Abstract
- - -
Numerical integration is a foundational technique in scientific computing and is at the core of many computer vision applications. Among these applications, implicit neural volume rendering has recently been proposed as a new paradigm for view synthesis, achieving photorealistic image quality. However, a fundamental obstacle to making these methods practical is the extreme computational and memory requirements caused by the required volume integrations along the rendered rays during training and inference. Millions of rays, each requiring hundreds of forward passes through a neural network are needed to approximate those integrations with Monte Carlo sampling. Here, we propose automatic integration, a new framework for learning efficient, closed-form solutions to integrals using implicit neural representation networks. For training, we instantiate the computational graph corresponding to the derivative of the implicit neural representation. The graph is fitted to the signal to integrate. After optimization, we reassemble the graph to obtain a network that represents the antiderivative. By the fundamental theorem of calculus, this enables the calculation of any definite integral in two evaluations of the network. Using this approach, we demonstrate a greater than 10× improvement in computation requirements, enabling fast neural volume rendering.
{: style="text-align: left;" }

### AutoInt Framework 
- - -
<div class="row">
<div class="col-sm-8 mx-auto">
<img src="/assets/img/publication/cvpr2021lindell/autoint_framework.png" class="img-fluid" alt="">
</div>
</div>
<br>

**AutoInt framework.** After (1) defining an integral network architecture, (2) AutoInt builds the corresponding grad network, which is (3) optimized to represent a function. (4) Definite in- tegrals can then be computed by evaluating the integral network, which shares parameters with its grad network.
{: style="text-align: left;" }

<div class="row">
<div class="col-sm-8 mx-auto">
<img  src="/assets/img/publication/cvpr2021lindell/autoint_rendering_v.png" style="" class="img-fluid" alt="">
</div>
</div>
<br>

**Volume rendering pipeline.** During training, the grad networks representing volume density σ and color c are optimized for a given set of multi-view images (top left). For inference, the grad networks’ parameters are reassembled to form the integral networks, which represent antiderivatives that can be efficiently evaluated to calculate ray integrals through the volume (bottom left). A sampling network predicts the locations of piecewise sections used for evaluating the definite integrals (right).
{: style="text-align: left;" }

### Results 
- - -

<div class="row">
<div class="col-sm-8 mx-auto">
<img  src="/assets/img/publication/cvpr2021lindell/autoint_tomo.png" style="" class="img-fluid" alt="">
</div>
</div>
<br>

**Example of AutoInt for compressive sensing computed tomography.** Left: illustration of the parameterization. Center: sinograms computed with the integral networks using different nonlinear activation functions. The ground truth (GT) sinogram is subsampled in angle by 4× (top), 8× (middle), and 16× (bottom). The optimized networks are used to interpolate the missing measurements. Using the Swish activation performs best in these experiments. Right: 1D scanlines of the sinogram centers shows the interpolation behavior of each method for each subsampling level.
{: style="text-align: left;" }

---

<div class="row">
<div class="col-sm-8 mx-auto">
<video preload="auto" autoplay muted loop="loop" style="display: block; width: 100%; height: auto;" src="/assets/img/publication/cvpr2021lindell/autoint_lego.webm" type="video/webm" class="">
</video>
</div>
</div>
<br>

**Results of volumetric rendering on the NerF synthetic dataset.**
{: style="text-align: left;" }

<div class="row">
<div class="col-sm-8 mx-auto">
<video preload="auto" autoplay muted loop="loop" style="display: block; width: 100%; height: auto;" src="/assets/img/publication/cvpr2021lindell/autoint_hotdog.webm" type="video/webm" class="">
</video>
</div>
</div>
<br>

**Results of volumetric rendering on the NerF synthetic dataset.**
{: style="text-align: left;" }

<div class="row">
<div class="col-sm-8 mx-auto">
<video preload="auto" autoplay muted loop="loop" style="display: block; width: 100%; height: auto;" src="/assets/img/publication/cvpr2021lindell/autoint_real.webm" type="video/webm" class="">
</video>
</div>
</div>
<br>

**Results of volumetric rendering on real captured data.**
{: style="text-align: left;" }


### Acknowledgments
- - -
This project is supported by a Stanford Graduate Fellowship in Science and Engineering, a National Science Foundation CAREER award (IIS 1553333), a Sloan Fellowship, the DARPA REVEAL program, a PECASE form the ARO, and by the KAUST Office of Sponsored Research through the Visual Computing Center CCF grant.
{: style="text-align: left;" }

### Citation
- - -
```
{% raw %}
@inproceedings{autoint,
  title={AutoInt: Automatic Integration for Fast Neural Volume Rendering},
  author={Lindell, D. B.* and Martel, J. N. P.* and Wetzstein, G.},
  booktitle={Proc. CVPR},
  year={2021},
}
{% endraw %}
```
{: style="text-align: left;" }
