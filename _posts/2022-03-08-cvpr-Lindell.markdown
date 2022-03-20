---
title: "BACON: Band-limited coordinate networks for multiscale scene representation"
subtitle: CVPR
brief: A new network architecture with an analytical Fourier spectrum and band-limited outputs
authors: <strong>David B. Lindell</strong>, Dave Van Veen, Jeong Joon Park, Gordon Wetzstein
layout: pub 
date: 2022-03-08
img: cvpr2022lindell.png
thumbnail: cvpr2022lindell.png
permalink: publications/bacon
alt: image-alt
pdf-link: https://arxiv.org/abs/2112.04645
video-link: https://www.youtube.com/watch?v=zIH3KUCgJEA
code-link: https://github.com/computational-imaging/bacon

---

**A new network architecture with an analytical Fourier spectrum and band-limited outputs.**
{: style="text-align: left;" }

### Video
- - -
<div class="embed-responsive embed-responsive-16by9">
<iframe class="embed-repsonsive-item" src="https://www.youtube.com/embed/zIH3KUCgJEA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<br>

### Abstract
- - -
Coordinate-based networks have emerged as a powerful tool for 3D representation and scene reconstruction. These networks are trained to map continuous input coordinates to the value of a signal at each point. Still, current architectures are black boxes: their spectral characteristics cannot be easily analyzed, and their behavior at unsupervised points is difficult to predict. Moreover, these networks are typically trained to represent a signal at a single scale, and so naive downsampling or upsampling results in artifacts. We introduce band-limited coordinate networks (BACON), a network architecture with an analytical Fourier spectrum. BACON has predictable behavior at unsupervised points, can be designed based on the spectral characteristics of the represented signal, and can represent signals at multiple scales without explicit supervision. We demonstrate BACON for multiscale neural representation of images, radiance fields, and 3D scenes using signed distance functions and show that it outperforms conventional single-scale coordinate networks in terms of interpretability and quality.
{: style="text-align: left;" }

### BACON Framework 
- - -
<div class="row">
<div class="col-sm-12 mx-auto">
<video preload="auto" autoplay muted loop="loop" style="display: block; width: 100%; height: auto;" src="/assets/img/publication/cvpr2022lindell/forward_pass.webm" type="video/webm" class="">
</video>
</div>
</div>
<br>

**BACON Architecture.** Our architecture builds on recently proposed [Multiplicative Filter Networks](https://openreview.net/forum?id=OmtmcPkkhT), which use Hadamard products between sine nonlinearities and linear layers. Our work adds significant improvements to this architecture enabling an interpretable and adjustable Fourier spectrum, multiscale outputs, and an initialization scheme that prevents vanishingly small activations in deep networks.
{: style="text-align: left;" }

<div class="row">
<div class="col-sm-12 mx-auto">
<video preload="auto" autoplay muted loop="loop" style="display: block; width: 100%; height: auto;" src="/assets/img/publication/cvpr2022lindell/bandwidth.webm" type="video/webm" class="">
</video>
</div>
</div>
<br>

**BACON Frequency Bandwidth.** The bandwidth of each output of the network can be described by analyzing the distribution of frequencies from the sine non-linearities at each output layer. We initialize these frequencies from a random uniform distribution, which allows us to upper bound the maximum frequency represented by the network. 
{: style="text-align: left;" }

<div class="row">
<div class="col-sm-12 mx-auto">
<video preload="auto" autoplay muted loop="loop" style="display: block; width: 100%; height: auto;" src="/assets/img/publication/cvpr2022lindell/cat_training.webm" type="video/webm" class="">
</video>
</div>
</div>
<br>

**Semi-supervised multiscale decomposition.** Since the network outputs are band-limited by construction, they can be supervised at a high-resolution output scale and the network automatically learns a multiscale decomposition. 
{: style="text-align: left;" }

<div class="row">
<div class="col-sm-8 mx-auto">
<img  src="/assets/img/publication/cvpr2022lindell/extrapolation.png" style="" class="img-fluid" alt="">
</div>
</div>
<br>

**Extrapolation Behavior.** The discrete frequencies used in the network result in a periodic signal representation. We fit the network to this seamless texture by supervising on coordinates within the red region. Then, querying the network outside the domain results in periodic extrapolation. 
{: style="text-align: left;" }

<div class="row">
<div class="col-sm-8 mx-auto">
<img  src="/assets/img/publication/cvpr2022lindell/initialization.png" style="" class="img-fluid" alt="">
</div>
</div>
<br>

**Initialization Scheme.** To facilitate training of deep networks, we introduce a new initialization scheme that maintains standard normal activations throughout the network (bottom). This alleviates a problem with the previously proposed initialization scheme (top) whose activations become vanishingly small at deeper layers. 
{: style="text-align: left;" }


### 1D Fitting Example


<div class="row">
<div class="col-sm-10 mx-auto">
<img  src="/assets/img/publication/cvpr2022lindell/plots.png" style="" class="img-fluid" alt="">
</div>
</div>
<br>

**1D Fitting Result.** Other representations (SIREN, Fourier Features) are not band limited and have spurious high frequency components when fitting a simple 1D signal (orange) at a sparse set of supervised points (pink). BACON correctly interpolates between the supervised points (bottom middle) and we can also apply a low-pass filter (bottom row) to fit low-frequency components.

### Image Fitting

<div class="row">
<div class="col-sm-12 mx-auto">
<img  src="/assets/img/publication/cvpr2022lindell/image.png" style="" class="img-fluid" alt="">
</div>
</div>
<br>

**Image Fitting Result.** We compare BACON to Fourier Features, SIREN, and the integrated positional encoding of Mip-NeRF for fitting an image at 256×256 resolution. Fourier Features and SIREN show aliasing when downsampled. Mip-NeRF is explicitly trained at multiple scales and learns anti-aliasing. All methods except BACON show artifacts when upsampling the network at 4x resolution. BACON is supervised at a single scale and learns band-limited outputs that closely matche a low-pass filtered reference (see left column, Fourier spectra insets).
{: style="text-align: left;" }


### Neural Radiance Fields

<div class="row">
<div class="col-sm-12 mx-auto">
<img  src="/assets/img/publication/cvpr2022lindell/nerf.png" style="" class="img-fluid" alt="">
</div>
</div>
<br>

<div class="row">
<div class="col-sm-12 mx-auto">
<video preload="auto" autoplay muted loop="loop" style="display: block; width: 100%; height: auto;" src="/assets/img/publication/cvpr2022lindell/nerf_lego.webm" type="video/webm" class="">
</video>
</div>
</div>
<br>

**Neural Radiance Fields Results.** Comparison between NeRF, Mip-NeRF, and BACON. BACON outperforms NeRF for multiscale representation while using fewer parameters than Mip-NeRF to represent low resolution outputs.


### 3D Shape Representation

<div class="row">
<div class="col-sm-12 mx-auto">
<img  src="/assets/img/publication/cvpr2022lindell/shapes.png" style="" class="img-fluid" alt="">
</div>
</div>
<br>

<div class="row">
<div class="col-sm-12 mx-auto">
<video preload="auto" autoplay muted loop="loop" style="display: block; width: 100%; height: auto;" src="/assets/img/publication/cvpr2022lindell/shapes_thai.webm" type="video/webm" class="">
</video>
</div>
</div>
<br>

<div class="row">
<div class="col-sm-12 mx-auto">
<video preload="auto" autoplay muted loop="loop" style="display: block; width: 100%; height: auto;" src="/assets/img/publication/cvpr2022lindell/shapes_lucy.webm" type="video/webm" class="">
</video>
</div>
</div>
<br>

**3D Shape Representation Results.** Results on fitting networks to signed-distance functions of the Thai Statue and Lucy scenes from the Stanford 3D Scanning Repository. Outputs are shown for Neural Geometric Level of Detail (NGLOD), Fourier Features, SIREN, and BACON. All methods perform similarly at the highest detail output, but BACON learns a smooth multiscale decomposition of the shape. Insets show the Fourier spectra of the extracted signed-distance functions, revealing the band-limited output of BACON.


### Acknowledgments
- - -
This project was supported in part by a PECASE by the ARO and NSF award 1839974.
{: style="text-align: left;" }

### Citation
- - -
```
{% raw %}
@article{lindell2021bacon,
author = {Lindell, David B. and Van Veen, Dave and Park, Jeong Joon and Wetzstein, Gordon},
title = {BACON: Band-limited coordinate networks for multiscale scene representation},
journal = {arXiv preprint arXiv:0000.00000},
year={2021}
}
{% endraw %}
```
{: style="text-align: left;" }
