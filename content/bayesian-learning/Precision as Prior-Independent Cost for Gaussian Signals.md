---
up:
aliases:
tags:
  - concept/example
  - "#bayes/precision"
  - "#micro/information"
  - models/gaussian
  - models/sequential-sampling
---
In a Gaussian environment where the state $\theta\sim \mathcal{N}(\mu,\sigma^{2}_{\theta})$ and the [[Information Structure|signal]] is $X=\theta+\varepsilon$ with $\varepsilon\sim \mathcal{N}(0,\sigma^{2}_{\varepsilon})$, a common. [[Prior-Dependent Information Costs|prior-independent cost]] specification is 
$$
C(\sigma^{2}_{\varepsilon}) = \frac{\kappa}{\sigma^{2}_{\varepsilon}}
$$
for some scaling factor $\kappa>0$. The cost of the signal scales linearly with the precision of the signal, $\frac{1}{\sigma^{2}_{\varepsilon}}$. 

Modeling each observation $X_{i}=\theta+\varepsilon_{i}$ with $\varepsilon_{i}\sim \mathcal{N}(0,\sigma^{2})$ and $\varepsilon_{i}\ind\theta$ for all agents $i$, the conditional distribution of $\theta$ given the sample $(X_{1},\dots,X_{n})$ is the same as the conditional distribution of $\theta$ given the signal $X=\theta+\delta$, where $\delta\sim \mathcal{N}\left( 0,\ \frac{\sigma^{2}}{n} \right)$. 

So the cost function $C(\sigma^{2}_{\varepsilon})$ corresponds to a **fixed-cost** of $\kappa / \sigma^{2}$ for each individual in the sample. It is used in Wald's model of sequential sampling and is a common modeling choice in continuous-time sequential sampling problems where the signal corresponds to observation of Brownian motion. 

