---
up:
aliases:
tags:
  - concept/definition
---

> [!definition] Definition (Berk-Nash Equilibrium - Single Agent).
> A strategy profile $\sigma$ is a **Berk-Nash equilibrium** if there exists a $\mu \in\Delta(\Theta)$ such that,
> 1. $\mu \in\Delta(\Theta ^{\ast}(\sigma));$ i.e., $\mu$ has support on the set of [[Misspecified Beliefs Converge to the KL-Minimizing Parameter|KL-minimizers]] 
> 2. $\sigma$ is optimal given $\mu$; namely, $\sigma(a\mid s)>0$ implies that 
>    $$
>    a \in \argmax_{a^{\prime}\in \mathbb{A}}\, \mathbb{E}_{\overline{Q}_{\mu}(y\mid  s,a^{\prime})}[u(a^{\prime},y)]
>    $$
>    where $\overline{Q}_{\mu}(y\mid s,a)=\int_{\Theta}Q_{\theta}(y\mid s,a)\mu(\theta)\,d\theta$ is the conditional distribution over consequences that is induced by $\mu$. 

### Setup 

- **Finite sets of:**  payoff-relevant states $\Omega$, signal realizations $\mathbb{S}$, actions $\mathbb{A}$, and consequences $\mathbb{Y}$
	- $\mathbb{Y}$ determined by the agent's action and the state via a feedback function $f:\mathbb{A}\times\Omega\to \mathbb{Y}$
- Agent holds prior $p$ over $\Omega \times \mathbb{S}$. 
- **Payoff Function:** $u:\mathbb{A}\times \mathbb{Y}\to \mathbb{R}$

#### Timing 

1. Agent chooses strategy $\sigma:\mathbb{S}\to\Delta(\mathbb{A})$, mapping the observed signal into a distribution over actions
2. The state and signal $(\omega,s)$ drawn according to $p$ and the action $\sigma(s)$ is implemented 
3. The consequence $y$ is determined given the action and state $(a,\omega)$, and the agent obtains payoff $u(a,\omega)$. 

### Definitions

There is an **objective mapping** $Q:\mathbb{S}\times \mathbb{A}\to\Delta(\mathbb{Y})$ from actions and signals into distributions over consequences, where, 
$$
Q(y\mid  s,a) = \sum_{\omega\in f(\omega,a)=y} p(\omega\mid  s)\quad \forall (y,s,a).
$$
This is the conditional distribution over consequences that a bayesian agent with knowledge of $f$, the action $a$, and the signal realization $s$ would expect. The agent does not know $Q$ (or $f$). His **subjective model** $Q= \langle \Theta,\ (Q_{\theta})_{\theta \in\Theta} \rangle$ is a parameterized family of mappings $Q_{\theta}:\mathbb{S}\times \mathbb{A}\to\Delta(\mathbb{Y})$. 

> [!definition] Definition (Correctly-specified Agent).
> The agent is correctly specified if there exists $\theta \in \Theta$ such that $Q_{\theta}(\cdot\mid s,a)=Q(\cdot\mid s,a)\ \forall(s,a)\in \mathbb{S}\times \mathbb{A}$; otherwise, the agent is misspecified. 

For any strategy $\sigma:\mathbb{S}\to\Delta(\mathbb{A})$, define, 
$$
q_{\sigma}(s,a)\equiv p_{S}(s)\sigma(a\mid  s)
$$
to be the distribution on $\mathbb{S}\times \mathbb{A}$ induced by the strategy $\sigma$ and agent's prior $p$. Further define,

$$
K(\sigma,\theta) = \sum_{s,a\in \mathbb{S}\times \mathbb{A}} \left( \mathbb{E}_{Q(Y\mid  s,a)}\left[ \ln \frac{Q(Y\mid  s,a)}{Q_{\theta}(Y\mid  s,a)} \right]  \right)q_{\sigma}(s,a)
$$
to be the expected [[= Kullback-Leibler Divergence for Relative Entropy|KL-Divergence]] between $Q_{\theta}(\cdot\mid s,a)$ and the objective distribution $Q(\cdot\mid s,a)$ weighted by $q_{\sigma}\in\Delta(\mathbb{S}\times \mathbb{A})$. 

Given the agent's strategy $\sigma$, the set of closest parameters (in weighted KL-divergence) is 
$$
\Theta ^{\ast}(\sigma) = \argmin_{\theta \in\Theta}K(\sigma,\theta)
$$
## Examples 

> [!example] Example 1. Berk-NE for a Researcher.
> 
> A researcher's project is either good or bad, $\Omega=\{ g,b \}$. The researcher observes a reaction to the project, which is either positive or negative, $S=\{ +,- \}$, where $(\omega,s)$ are jointly distributed according to: 
> 
> $$
> \begin{matrix}
>  & s_{+} & s_{-} \\
> \omega_{g} & 1 / 3 & 1 / 6 \\
> \omega_{b} & 1 / 6 & 1 / 3  
> \end{matrix}
> $$
> 
> > [!property]- Setup.
> > The researcher observes the signal $s \in \mathbb{S}$ and decides whether to exert high or low effort towards developing the project $A=\{ H,L \}$. The unknown true quality of the project, and the researcher's effort, jointly determine a journal outcome in $\mathbb{Y}=\{ A,R \}$ (accept or reject) according to the function
> > $$
> > f(a,\omega)= \begin{cases}
> > A & (a,\omega)=(H,g) \\
> > R & \text{otherwise} 
> > \end{cases}
> > $$
> > That is, the project is accepted if it is good and also the researcher's effort is high, and it is rejected otherwise. The researcher's payoff is 
> > $$
> > u(a,y) = \begin{cases}
> > 1 & (a,y)=(H,A) \\
> > -1 & (a,y)= (H,R) \\
> > 2 & (a,y) = (L,A) \\
> > 0 & (a,y)=(L,R)
> > \end{cases}
> > $$
> > The true distribution $Q(y\mid a,s)$ is described by $Q(A\mid +,L)=Q(A\mid -,L)=0$ (since the paper will not be accepted if effort is low) and 
> > $$
> > \begin{aligned}
> > Q(A\mid  +,H) & = p(\{ \omega:f(H,w)=A \}\mid  +) & = p(g\mid  +) & = \frac{2}{3} \\
> > Q(A\mid  -,H) & = p(\{ \omega:f(H,\omega)= A \}\mid  -) & = p(g\mid  -) & = \frac{1}{3}
> > \end{aligned}
> > $$
> > since conditional on high effort, the probability of acceptance is equal to the probability a paper is good. These conditional distributions are summarized as: 
> > 
> > $$
> > \begin{matrix}
> >  & A & R \\
> > (+,H) & 2 /3  & 1 /3 \\
> > (-,H) & 1 / 3 & 2 / 3 \\
> > (+,L) & 0 & 1 \\
> > (-,L) & 0 & 1 
> > \end{matrix}
> > $$
> > Suppose the researcher's subjective model allows only for the parameters $\theta_{1},\theta_{2}$ indexed according to the following conditional distributions,
> > 
> > $$
> > \begin{matrix}
> >  & A & R \\
> > (+,H) & 3 / 4  & 1 /4 \\
> > (-,H) & 1 / 2 & 1 / 2 \\
> > (+,L) & 0 & 1 \\
> > (-,L) & 0 & 1 
> > \end{matrix} \qquad 
> > \begin{matrix}
> >  & A & R \\
> > (+,H) & 2 /3  & 1 /3 \\
> > (-,H) & 1 / 3 & 2 / 3 \\
> > (+,L) & 1 / 10 & 9 / 10 \\
> > (-,L) & 1 / 10 & 9 / 10 
> > \end{matrix}
> > $$
> > 
> > The distribution on the left, $Q_{\theta_{1}}$, overestimates the value of hard work, and the distribution on the right, $Q_{\theta_{2}}$, is overly optimistic about the probability of acceptance given low effort. 
> 
> > [!question]
> > Is the strategy profile, $\sigma(+)=H,\ \sigma(-)=L$ (in which the researcher exerts high effort after a positive signal and low effort after a low signal) a Berk-Nash equilibrium? 
> 
> > [!hint]- Answer
> > 
> > > [!abstract]- Deriving the KL minimizer
> > > The distribution $q_{\sigma}$, assigns probability $1 /2$ to $(+,H)$ and to $(-,L)$. So, 
> > > $$
> > > \begin{aligned}
> > > K(\sigma,\theta) & = \frac{1}{2}\left( \sum_{y\in \{ A,R \}} Q(y\mid  +,H)\cdot \ln\left( \frac{Q(y\mid  +,H)}{Q_{\theta}(y\mid  +,H)} \right) \right) \\
> > >  & \qquad + \frac{1}{2}\left( \sum_{y\in \{ A,R \}} Q(y\mid  -,L)\cdot \ln\left( \frac{Q(y\mid  -,L)}{Q_{\theta}(y\mid  -,L)} \right) \right)
> > > \end{aligned}
> > > $$
> > > and thus, 
> > > $$
> > > \begin{aligned}
> > > K(\sigma,\theta_{1}) & = \frac{1}{2}\cdot\left( \frac{2}{3}\ln\left( \frac{2 / 3}{3 /4} \right)+ \frac{1}{3}\ln\left( \frac{1 /3}{1 /4} \right) \right)\approx 0.0038 \\
> > > K(\sigma,\theta_{2}) & = \frac{1}{2}\cdot \ln\left( \frac{1}{9 / 10} \right)\approx 0.02
> > > \end{aligned}
> > > $$
> > > Hence $\theta_{1}$ is the unique minimizer of KL divergence to the true distribution, i.e., $\Theta ^{\ast}(\sigma)=\{ \theta_{1} \}$. 
> > 
> > Only $\mu=\delta_{\theta_{1}}$ (a point-mass at $\theta_{1}$) satisfies $(1)$ of the definition, and the distribution $\overline{Q}_{\mu}$ in part $(2)$ simplifies to $Q_{\theta_{1}}$. To determine whether $\sigma$ is a Berk-NE, it remains to verify that the $\sigma$ satisfies the optimality conditions in $(2)$. 
> > 
> > > [!abstract]- Optimality
> > > Suppose the realization is $s=+$. Then the action $H$ yields expected payoff of 
> > > $$
> > > \mathbb{E}_{Q_{\theta_{1}}(y\mid  +,H)}[u(H,y)] = 1\cdot \frac{3}{4}-1\cdot \frac{1}{4}= \frac{1}{2}
> > > $$
> > > while the action $L$ yields an expected payoff of 
> > > $$
> > > \mathbb{E}_{Q_{\theta_{1}}(y\mid  +,L)}[u(L,y)] = 0.
> > > $$
> > > so $a=H$ is indeed optimal. 
> > > 
> > > Now suppose that the signal realization is $s=-$. Then the action $H$ yields an expected payoff of, 
> > > $$
> > > \mathbb{E}_{Q_{\theta_{1}}(y\mid  -,H)}[u(H,y)] = 1\cdot \frac{1}{2}-1\cdot \frac{1}{2}= 0
> > > $$
> > > and the action $L$ yields an expected payoff of 
> > > $$
> > > \mathbb{E}_{Q_{\theta_{1}}(y\mid  -,L)}[u(L,y)] = 0.
> > > $$
> > > So $a=L$ is a best reply, and we conclude that $\sigma$ is a Berk-NE. 
> > 
> > Hence, we have shown that the strategy is a best reply to a point mass on the unique parameter that minimizes KL divergence to the distribution over consequences induced by $\sigma$. In this sense, the strategy $\sigma$ is internally consistent with respect to the agent's misspecified model. 


---

See also: [[Berk-Nash Equilibrium - Simultaneous Games]]. 