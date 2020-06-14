---
title: Non-line-of-sight surface reconstruction using the directional light-cone transform 
subtitle: CVPR 2020 (oral)
authors: Sean I. Young, David B. Lindell, Bernd Girod, David Taubman, Gordon Wetzstein
layout: default
modal-id: 2020-1
date: 2020-06-10
img: cvpr2020young.jpg
thumbnail: cvpr2020young.jpg
alt: image-alt
pdf-link: http://www.computationalimaging.org/wp-content/uploads/2020/03/dlct_cvpr2020.pdf 
supp-link: http://www.computationalimaging.org/wp-content/uploads/2020/03/dlct_supplement_cvpr2020.pdf
code-link: https://github.com/computational-imaging/nlos-dlct

---

**We propose a joint albedo–normal approach to non-line-of-sight (NLOS) surface reconstruction using the directional light-cone transform (D-LCT).**
{: style="text-align: left;" }

### Video
- - -
<div style="col-md-12">
<iframe style="right: 50%;" width="560" height="315" src="https://www.youtube.com/embed/9ezA5ycHXDA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>


### Abstract
- - -
We propose a joint albedo–normal approach to non-line-of-sight (NLOS) surface reconstruction using the directional light-cone transform (D-LCT). While current NLOS imaging methods reconstruct either the albedo or surface normals of the hidden scene, the two quantities provide complementary information of the scene, so an efficient method to estimate both simultaneously is desirable. We formulate the recovery of the two quantities as a vector deconvolution problem, and solve it using the Cholesky–Wiener decomposition. We show that surfaces fitted non-parametrically using our recovered normals are more accurate than those produced with NLOS surface reconstruction methods recently proposed, and are 1,000× faster to compute than using inverse rendering.
{: style="text-align: left;" }

<img src="img/publication/cvpr2020young/dlct_1.jpg" style="padding: 0px;" class="img-responsive" alt="">
<img src="img/publication/cvpr2020young/dlct_2.jpg" style="padding: 10px;" class="img-responsive" alt="">

**NLOS surface reconstruction via the D-LCT:** Existing NLOS imaging methods typically recover only the albedo of the hidden scene. Ae Directional LCT recovers both the albedo (a) and the surface normals (b) of the scene, allowing us to reconstruct the hidden object surface with finer detail (c).
{: style="text-align: left;" }

<img src="img/publication/cvpr2020young/dlct_3.jpg" style="padding: 0px;" class="img-responsive" alt="">
**Method overview:** A 1m × 1m × 2ns volume 𝜏 of transients (a) is filtered using the directional light-cone transform to obtain the surface normals (b). We integrate the surface normals to obtain the final reconstructed surface (c).
{: style="text-align: left;" }

<div class="row">
<div class="col-md-3 col-md-offset-3">
<img src="img/publication/cvpr2020young/bunny_gt.jpg" style="height: 200px; padding: 0px;" class="img-responsive" alt="">
</div>
<div class="col-md-3">
<img src="img/publication/cvpr2020young/bunny.gif" style="height: 200px; padding: 0px;" class="img-responsive" alt="">
</div>
</div>
<div class="row">
<div class="col-md-3 col-md-offset-3">
<img src="img/publication/cvpr2020young/serapis_gt.jpg" style="height: 200px; padding: 0px;" class="img-responsive" alt="">
</div>
<div class="col-md-3">
<img src="img/publication/cvpr2020young/serapis.gif" style="height: 200px; padding: 0px;" class="img-responsive" alt="">
</div>
</div>
<div class="row">
<div class="col-md-3 col-md-offset-3">
<img src="img/publication/cvpr2020young/discobulus_gt.jpg" style="height: 200px; padding: 0px;" class="img-responsive" alt="">
</div>
<div class="col-md-3">
<img src="img/publication/cvpr2020young/discobulus.gif" style="height: 200px; padding: 0px;" class="img-responsive" alt="">
</div>
</div>
**Simulated Results** showing ground truth object (left) and reconstructed NLOS surface with color-coded normals (right).
{: style="text-align: left;" }

<div class="col-md-12">
<img src="img/publication/cvpr2020young/dlct_comparison.jpg" style="padding: 10px;" class="img-responsive" alt="">
</div>
**Comparison of Related Methods.** Recent NLOS surface reconstruction methods, including Fermat Flow [Xin et al., 2019] and Beyond volumetric Albedo [Tsai et al. 2019], fail to reconstruct the complex geometry of this object from measured data. The Directional Light-Cone Transform recovers high-quality geometry and surface normals (right).
{: style="text-align: left;" }

### Acknowledgments
- - -
We thank M. J. Galindo for help with the ZNLOS dataset and I. Gkioulekas for help with the baseline comparisons. D.L. was supported by a Stanford Graduate Fellowship. G.W. was supported by an NSF CAREER Award (IIS 1553333), a Sloan Fellowship, by the KAUST Office of Sponsored Research through the Visual Computing Center CCF grant, the DARPA REVEAL program, and a PECASE by the ARL.
{: style="text-align: left;" }

### Citation
- - -
```
{% raw %}
@inproceedings{Young:2020:dlct,
author = {Sean I. Young and David B. Lindell and Bernd Girod and David Taubman and Gordon Wetzstein},
title = {Non-line-of-sight Surface Reconstruction Using the Directional Light-cone Transform},
booktitle = {Proc. CVPR},
year = {2020},
}
{% endraw %}
```
{: style="text-align: left;" }
