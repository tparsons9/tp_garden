---
up: "[[Information Costs]]"
aliases:
tags:
  - concept/property
  - micro/information
in:
  - "[[Courses]]"
  - "[[ECON 415-1]]"
mathLink-blocks:
  zero-cost-no-info-ups: $\Phi(p) - \mathbb{E}_{q\sim \delta_{p}}[\Phi(q)]=0$
---
This is a standard **normalization assumption** in the economics of information. It states that an agent who chooses to acquire no new information incurs no cost. This property provides a "zero point" or baseline for the cost function, against which all costly information-gathering activities are measured.

## Statement 

Let $C(p, \tau)$ be an information cost function, where $p$ is the prior and $\tau$ is the distribution over posteriors. Let $\delta_p$ denote the "null signal" (a degenerate distribution over posteriors) that returns the prior $p$ with certainty.

The property is: 
$$
C(p, \delta_p) = 0 
$$
### Forms 

> [!property] Property (Zero Cost of No Information - UPS).
> The cost of acquiring "no information", represented by a [[Degenerate Distributions|degenerate posterior distribution]] $\delta_{p}$ (just returns the prior), is zero. That is, 
> $$
> C(p,\delta_{p})= \Phi(p) - \mathbb{E}_{q\sim \delta_{p}}[\Phi(q)] 
>$$

^zero-cost-no-info-ups

The $\mathbb{E}_{q\sim\delta_{p}}[\Phi(q)]$ term reduces to $\Phi(p)$ for the degenerate distribution, and hence $\Phi(p)-\Phi(p)=0$. 