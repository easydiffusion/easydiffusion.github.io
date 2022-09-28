---
title: "Samplers"
permalink: /docs/samplers/
---

# Useful explanation on samplers
- Euler is the simplest, and thus one of the fastest. It and Heun are classics in terms of solving ODEs.

- Euler & Heun are closely related. Heun is an 'improvement' on Euler in terms of accuracy, but it runs at about half the speed (which makes sense - it has to calculate the normal Euler term, then do it again to get the final output).

- LMS and PLMS are their cousins - they use a related, but slightly different approach (averaging out a couple of steps in the past to improve accuracy). As I understand it, PLMS is effectively LMS (a classical method) adapted to better deal with the weirdness in neural network structure.

- DDIM is a neural network method. It's quite fast per step, but relatively inefficient in that it takes a bunch of steps to get a good result.

- DPM2 is a fancy method designed for diffusion models explicitly aiming to improve on DDIM in terms of taking less steps to get a good output. It needs to run the denoising twice per step, so once again - it's about twice as slow.

- The Ancestral samplers are deceptively much further away from the corresponding non-Ancestral samplers and closer to each other. The corresponding algorithms are used - hence the names - but in a different context.

    They can add a bunch of noise per step, so they are more chaotic and diverge heavily from non-Ancestral samplers in terms of the output images. As per the normal-flavored samplers, DPM2-A is about half as fast as Euler-A.
Weirdly, in some comparisons DPM2-A generates very similar images as Euler-A... on the previous seed. Might be due to it being a second-order method vs first-order, might be an experiment muck-up.
In practice, Heun & Euler make a nice pair - Euler for fast iteration over a seed+prompt+config until you get something you like, then run Heun to get a better level of details.

(P)LMS suffer from really ugly artifacts on lower step settings ('rainbows' of noise). In contrast, DPM-2s and Euler-A are pretty good at getting coherent outputs at low steps - I've seen cases where a 40-step Euler-A looked much better than the 150-step one on the same setup, DPM-2-A presumably has the same characteristics (but I hadn't used it much TBH because it's sloooooow).

Beyond that, on high steps, most non-ancestral samplers look fairly similar across similar styles. You can consider switching up the sampler as a simple way of shaking up the noise pattern a little to eliminate artifacts or produce slight variations.

Non-ancestral models have the advantage of being easier to reason about; generally, more steps = more good there.

Empirically, Euler-A seems to follow complex prompts better with higher steps - you'll get something regardless, but it might be more focused on parts of the prompt you don't care much for.

It also means you may wind up binary-searching between two step counts to get slightly better details before the sampler decides to go off and repaint the whole damn thing to an entirely different image.
from https://www.reddit.com/r/StableDiffusion/comments/xbeyw3/can_anyone_offer_a_little_guidance_on_the/

This comparison should be helpful: https://www.reddit.com/r/StableDiffusion/comments/xe26ob/sampler_v_steps/
