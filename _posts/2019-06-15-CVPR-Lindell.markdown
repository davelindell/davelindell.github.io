---
title: Acoustic non-line-of-sight imaging 
subtitle: CVPR 2019 (oral)
brief: A novel approach to seeing around corners using acoustic echoes.
authors: <strong>David B. Lindell</strong>, Gordon Wetzstein, Vladlen Koltun
layout: pub
date: 2019-06-15 
img: cvpr2019lindell.png
thumbnail: cvpr2019lindell.png
permalink: publications/acoustic-nlos
alt: image-alt
pdf-link: https://drive.google.com/a/stanford.edu/file/d/1nYyMLNU6XMIXkzqwxt3jEDoOap4gk_IX/view?usp=sharing
supp-link: https://drive.google.com/a/stanford.edu/file/d/1rkeGQwmYRgYfS_U_RcR3iPmF3tIw8LMB/view?usp=sharing
video-link: https://www.youtube.com/watch?v=yoNmH3AfxCQ
social: 
    - title: Science  
      url: https://www.sciencemag.org/news/2019/06/scientists-use-sound-see-around-corners 
      img: science.png
    - title: VentureBeat 
      url: https://venturebeat.com/2019/06/17/intel-highlights-ai-that-can-see-around-corners-coach-children-on-the-autism-spectrum-and-more-during-cvpr/
      img: venturebeat.png
    - title: Gizmodo 
      url: https://gizmodo.com/researchers-follow-bats-example-use-cheap-speakers-and-1835581284 
      img: gizmodo.png 

---

**We introduce a novel approach to seeing around corners using acoustic echoes. A system of speakers emits sound waves which scatter from a wall to a hidden object and back. Microphones capture the timing of the returning echoes, and we use reconstruction algorithms inspired by synthetic aperture radar and seismic imaging to recover the geometry of the hidden object.**
{: style="text-align: left;" }

**Our method can reconstruct hidden objects using inexpensive, off-the-shelf hardware at longer distances with lower exposure times compared to specialized, state-of-the-art optical systems.**
{: style="text-align: left;" }

### Video
- - -
<div class="embed-responsive embed-responsive-16by9">
<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/yoNmH3AfxCQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<br>

### Abstract
- - -
Non-line-of-sight (NLOS) imaging enables unprecedented capabilities in a wide range of applications, including robotic and machine vision, remote sensing, autonomous vehicle navigation, and medical imaging. Recent approaches to solving this challenging problem employ optical time-of-flight imaging systems with highly sensitive time-resolved photodetectors and ultra-fast pulsed lasers. However, despite recent successes in NLOS imaging using these systems, widespread implementation and adoption of the technology remains a challenge because of the requirement for specialized, expensive hardware.
{: style="text-align: left;" }

We introduce acoustic NLOS imaging, which is orders of magnitude less expensive than most optical systems and captures hidden 3D geometry at longer ranges with shorter acquisition times compared to state-of-the-art optical methods. Inspired by hardware setups used in radar and algorithmic approaches to model and invert wave-based image formation models developed in the seismic imaging community, we demonstrate a new approach to seeing around corners.
{: style="text-align: left;" }

### Hardware Prototype
- - -
<div class="row">
<div class="col-md-10 mx-auto">
<img src="/assets/img/publication/cvpr2019lindell/acoustic_array.png" style="padding: 10px;" class="img-fluid" alt="">
</div>
</div>
**Photograph of the prototype system.** The prototype comprises a linear array of 16 speakers and microphones mounted vertically on a 1 m translation stage. Power amplifiers and a set of audio interfaces drive the speakers and record from the microphones.
{: style="text-align: left;" }

### Recovering Hidden Shape from Sound
- - -
<div class="row">
<div class="col-md-10 mx-auto">
<img src="/assets/img/publication/cvpr2019lindell/teaser.png" style="padding: 10px;" class="img-fluid" alt="">
</div>
</div>

Modulated sound waves are emitted from a speaker, travel around the corner to a hidden object, and are then recorded by a microphone as they reflect back. The processed measurements (bottom left) contain peaks indicating the path lengths of sound which travels directly from the speaker to the microphone (A, peak is clipped), to the wall and back (B), and also to the hidden object and back (C). Such measurements are captured for a range of speaker and microphone positions to reconstruct the 3D geometry of the hidden object (bottom right).
{: style="text-align: left;" }

### Acoustic Transmit Signal 
- - -
<div class="row">
<div class="col-md-10 mx-auto">
<img src="/assets/img/publication/cvpr2019lindell/mirror.png" style="padding: 10px;" class="img-fluid" alt="">
</div>
</div>
Due to the mirror-like scattering of the wall at acoustic wavelengths, the measurements appear to be captured from a mirrored volume located behind the wall, as if the wall were transparent. The transmit signal is a linear ramp in frequency over time. For a single reflector, the return signal is a delayed version of the transmit signal (top right). The receive and transmit signals are mixed together
and Fourier transformed, producing a sharp peak at a frequency proportional to the distance of the reflector (bottom right).
{: style="text-align: left;" }

### Visualizations
- - -
<div class="row">
<div class="col-md-8 mx-auto">
<img src="http://www.computationalimaging.org/wp-content/uploads/2019/03/cvpr2019_scanning.gif" style="padding: 10px;" class="img-fluid" alt="">
</div>
</div>
Visualization of a 2D acoustic NLOS scanning system.

<div class="row">
<div class="col-md-8 mx-auto">
<img src="http://www.computationalimaging.org/wp-content/uploads/2019/03/cvpr2019_seismic.gif" style="padding: 10px;" class="img-fluid" alt="">
</div>
</div>
 A similar problem arises in seismology, where shockwaves are used to probe and reconstruct underground surfaces.
{: style="text-align: left;" }

### Results
- - -
<div class="row">
<div class="col-md-8 mx-auto">
<img src="http://www.computationalimaging.org/wp-content/uploads/2019/03/cvpr2019_letter_h.gif" style="padding: 10px;" class="img-fluid" alt="">
</div>
</div>
Reconstructed letter “H” captured from around the corner. Reconstructions are shown using a ‘confocal’ subset of closely spaced speakers and microphones, the ‘nonconfocal’ set of all speaker and microphone pairs, and with additional priors on the reconstructed volume.
{: style="text-align: left;" }

<div class="row">
<div class="col-md-8 mx-auto">
<img src="http://www.computationalimaging.org/wp-content/uploads/2019/03/cvpr2019_corner.gif" style="padding: 10px;" class="img-fluid" alt="">
</div>
</div>
Reconstruction of multiple acoustic corner reflectors from around the corner.
{: style="text-align: left;" }

<div class="row">
<div class="col-md-8 mx-auto">
<img src="http://www.computationalimaging.org/wp-content/uploads/2019/03/cvpr2019_optical.gif" style="padding: 10px;" class="img-fluid" alt="">
</div>
</div>
Comparison to an optical NLOS system. Optical reconstruction of the more distant letter fails due to limited signal. The acoustic system recovers both letters at increased distance from the wall and with much lower acquisition time.
{: style="text-align: left;" }

### Acknowledgments
- - -
This project was supported by a Stanford Graduate Fellowship, an NSF CAREER Award (IIS 1553333), a Terman Faculty Fellowship, a Sloan Fellowship, by the KAUST Office of Sponsored Research through the Visual Computing Center CCF grant, the Center for Automotive Research at Stanford (CARS), the DARPA REVEAL program, and a PECASE from the ARO.
{: style="text-align: left;" }

### Citation
- - -
```
{% raw %}
@inproceedings{lindell2019acoustic,
  title={Acoustic non-line-of-sight imaging},
  author={Lindell, David B and Wetzstein, Gordon and Koltun, Vladlen},
  booktitle={Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition},
  pages={6780--6789},
  year={2019}
}
{% endraw %}
```
{: style="text-align: left;" }


