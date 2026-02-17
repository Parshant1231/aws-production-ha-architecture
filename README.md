<div align="center">
  
  # 🌩️ **PRODUCTION-READY HIGHLY AVAILABLE ARCHITECTURE ON AWS**
  
  
  [![AWS](https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)](https://aws.amazon.com)
  [![EC2](https://img.shields.io/badge/Amazon_EC2-FF9900?style=for-the-badge&logo=amazon-ec2&logoColor=white)](https://aws.amazon.com/ec2)
  [![Nginx](https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)](https://nginx.org)
  [![Ubuntu](https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white)](https://ubuntu.com)
  [![S3](https://img.shields.io/badge/Amazon_S3-569A31?style=for-the-badge&logo=amazon-s3&logoColor=white)](https://aws.amazon.com/s3)
  [![Load Balancer](https://img.shields.io/badge/Load_Balancer-0052CC?style=for-the-badge&logo=amazon-aws&logoColor=white)]()
  
  <hr>
  
  <h3>✨ <em>"Design for failure and nothing will fail"</em> ✨</h3>
  <p><i>- AWS Well-Architected Framework</i></p>
  
  
</div>


---

## 🎯 **SCENARIO**

<div align="center">
  <table>
    <tr>
      <td align="center">
        <img src="https://user-images.githubusercontent.com/74038190/212284087-bbe7e430-757e-4901-90bf-4cd2ce3e1852.gif" width="50">
      </td>
      <td>
        <b>You are hired as a Cloud Engineer</b> to design and deploy a <b>production-ready, highly available web application architecture</b> using AWS services. The solution must ensure <b>scalability, fault tolerance, and proper integration</b> of EC2, Load Balancer, Auto Scaling, and S3.
      </td>
    </tr>
  </table>
</div>

<br>

<div align="center">
  
  ### 🎯 **Project Objectives**
  
  | 🏢 **Scalability** | 🛡️ **Fault Tolerance** | 🔗 **Integration** |
  |:---:|:---:|:---:|
  | Handle varying loads automatically | Survive component failures | Seamless AWS service integration |
  
</div>

---

## 🏗️ **ARCHITECTURE DIAGRAM**

<div align="center">
  
  ```mermaid
  graph TB
      Internet((Internet)) --> Route53[Route 53 DNS]
      Route53 --> ALB[Application Load Balancer<br/>Port 80 Listener]
      
      subgraph "Availability Zone A"
      EC2_A[EC2 Instance<br/>Nginx Web Server]
      end
      
      subgraph "Availability Zone B"
      EC2_B[EC2 Instance<br/>Nginx Web Server]
      end
      
      subgraph "Availability Zone C"
      EC2_C[EC2 Instance<br/>Nginx Web Server]
      end
      
      ALB --> EC2_A
      ALB --> EC2_B
      ALB --> EC2_C
      
      TargetGroup[Target Group<br/>Health Checks: /] --> EC2_A
      TargetGroup --> EC2_B
      TargetGroup --> EC2_C
      
      ASG[Auto Scaling Group<br/>Min:2 Desired:2 Max:5<br/>CPU >70% Scale Out<br/>CPU <30% Scale In] --> EC2_A
      ASG --> EC2_B
      ASG --> EC2_C
      
      S3[(S3 Bucket<br/>Static Assets<br/>Versioning Enabled)] --> EC2_A
      S3 --> EC2_B
      S3 --> EC2_C
      
      style Internet fill:#f9f,stroke:#333,stroke-width:2px
      style Route53 fill:#ff9900,stroke:#333,stroke-width:2px
      style ALB fill:#ff9900,stroke:#333,stroke-width:4px
      style ASG fill:#87CEEB,stroke:#333,stroke-width:4px
      style S3 fill:#569A31,stroke:#333,stroke-width:2px

```

</div>

<div align="center">

# ⚙️ Production-Ready AWS Infrastructure Checklist  
### 🚀 Highly Available | Auto-Scalable | Secure | Cloud-Native

<img src="https://img.shields.io/badge/AWS-Cloud%20Architecture-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white"/>
<img src="https://img.shields.io/badge/Environment-Production-blue?style=for-the-badge"/>
<img src="https://img.shields.io/badge/Status-Deployed-success?style=for-the-badge"/>

</div>

---

# 🏗️ Infrastructure Implementation Status

## 🖥️ Compute Layer

| Component | Description | Status |
|------------|------------|--------|
| Ubuntu EC2 + Nginx | Web server provisioning & configuration | ✅ Completed |
| Security Groups | Restricted to Port 22 (SSH) & 80 (HTTP) | 🔒 Secured |
| Custom AMI | Golden image for scalable deployments | 📦 Created |
| Launch Template | Standardized instance configuration | 🧩 Configured |

---

## 🔁 High Availability & Scaling Layer

| Component | Description | Status |
|------------|------------|--------|
| Auto Scaling Group | Min: 2 | Max: 5 instances | 📈 Active |
| Application Load Balancer | Traffic distribution across AZs | ⚖️ Deployed |
| Health Checks | Instance health monitoring | 💚 Enabled |
| CPU Scaling Policy | Dynamic scaling based on CPU usage | 🤖 Automated |
| Load Testing | Stress testing using `stress` tool | 🧪 Validated |

---

## ☁️ Storage & Asset Management

| Component | Description | Status |
|------------|------------|--------|
| S3 Bucket | Object storage for static assets | 🗂️ Created |
| Versioning | Data recovery & rollback capability | 🔁 Enabled |
| Static Asset Integration | Linked S3 with EC2/Nginx | 🔗 Integrated |
| Secure Access | IAM-based restricted access | 🛡️ Implemented |

---


## 🔧 IMPLEMENTATION STEPS

---
## Step 1: Create a Web Server

### 📋 Instance Configuration Details

| 🧩 Component | ⚙️ Configuration |
|-------------|------------------|
| **Operating System** | Ubuntu 20.04 / 22.04 LTS |
| **Instance Type** | t2.micro (AWS Free Tier Eligible) |
| **Subnet** | Public Subnet |
| **Security Group Rules** | SSH (Port 22) – My IP Only 🔒 <br> HTTP (Port 80) – 0.0.0.0/0 🌍 |



```bash
# 🚀 Connect to EC2 Instance
ssh -i "your-key.pem" ubuntu@<public-ip>

# 📦 Update System & Install Nginx
sudo apt update && sudo apt upgrade -y
sudo apt install nginx -y

# ⚙️ Configure Nginx
sudo systemctl start nginx
sudo systemctl enable nginx
sudo systemctl status nginx


```

---
## STEP 2: CUSTOM AMI CREATION
<div align="left">
  <table> 
    <tr> 
    <th>Step</th>
    <th>Action</th> 
  </tr> 
    <tr> <td>1</td> <td>Navigate to EC2 Console → Instances</td>  </tr>
    <tr> <td>2</td> <td>Select configured instance → Actions → Image → Create Image</td> </tr>
    <tr> 
      <td>3</td> 
      <td>Name: <code>nginx-web-server-ami-v1</code></td>
    </tr>
    <tr>
      <td>4</td>
      <td>Description: Ubuntu with Nginx pre-configured</td>
    </tr>
  </table>

  > 📸 AMI Creation Screenshot


<img width="1920" height="1080" alt="Ami" src="https://github.com/user-attachments/assets/aad83190-5b75-4842-9696-fd9909309be3" />
</div>

---


## STEP 3: LAUNCH TEMPLATE

### 🧩 Launch Template (JSON Configuration)

```json
{
  "LaunchTemplateName": "web-server-launch-template",
  "VersionDescription": "Initial version",
  "LaunchTemplateData": {
    "ImageId": "ami-12345678",
    "InstanceType": "t2.micro",
    "KeyName": "your-key-pair",
    "SecurityGroupIds": ["sg-12345678"],
    "UserData": "#!/bin/bash\nsystemctl start nginx"
  }
}
```
---


## STEP 4: AUTO SCALING GROUP

### 🧩 Auto Scaling Group Parameters

| ⚙️ Parameter | 📌 Value |
|-------------|----------|
| **Name** | web-app-asg |
| **Launch Template** | web-server-launch-template |
| **VPC** | Default VPC |
| **Subnets** | us-east-1a, us-east-1b, us-east-1c |
| **Desired Capacity** | 2 Instances |
| **Minimum Capacity** | 2 Instances |
| **Maximum Capacity** | 5 Instances |

---


##  STEP 5: LOAD BALANCER & TARGET GROUP


### 🎯 Target Group Configuration

| ⚙️ Setting | 📌 Value |
|------------|----------|
| **Name** | web-app-tg |
| **Protocol** | HTTP |
| **Port** | 80 |
| **Health Check Path** | / |
| **Healthy Threshold** | 2 consecutive successes |
| **Unhealthy Threshold** | 2 consecutive failures |
| **Timeout** | 5 seconds |
| **Interval** | 30 seconds |



### 💚 Health Check Strategy

- ALB continuously monitors instance health.
- If 2 consecutive health checks fail → instance marked **unhealthy**.
- Traffic is routed **only to healthy instances**.
- Works together with **Auto Scaling** for self-healing architecture.



### ⚖️ Application Load Balancer Configuration

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/235223599-0eadbd7c-ed1a-4bc0-8fe7-5d1bea89189a.gif" width="400">
</div>

---

## STEP 6: S3 BUCKET INTEGRATION


### 🪣 Create S3 Bucket with Versioning
```bash

# Create bucket
aws s3 mb s3://ha-web-app-static-assets-unique-123 --region us-east-1

# Enable versioning
aws s3api put-bucket-versioning \
    --bucket ha-web-app-static-assets-unique-123 \
    --versioning-configuration Status=Enabled

# Upload static files
aws s3 cp ./assets/ s3://ha-web-app-static-assets-unique-123/ --recursive

# Set bucket policy for secure access (not public)

```
### 📄 Sample HTML with S3 Integration
```bash

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HA AWS Architecture</title>
    <link rel="stylesheet" href="https://ha-web-app-static-assets-unique-123.s3.amazonaws.com/css/style.css">
</head>
<body>
    <div class="container">
        <h1>✨ Production-Ready Highly Available Architecture ✨</h1>
        <img src="https://ha-web-app-static-assets-unique-123.s3.amazonaws.com/images/aws-logo.png" 
             alt="AWS Logo" class="logo">
        
        <div class="server-info">
            <h2>Server Information</h2>
            <p><strong>Instance ID:</strong> <span id="instance-id"><?php echo gethostname(); ?></span></p>
            <p><strong>Availability Zone:</strong> 
              <span id="az">
                <?php 
                  $az = file_get_contents('http://169.254.169.254/latest/meta-data/placement/availability-zone');
                  echo $az;
                ?>
              </span>
            </p>
        </div>
    </div>
    <script src="https://ha-web-app-static-assets-unique-123.s3.amazonaws.com/js/main.js"></script>
</body>
</html>

```
---
## STEP 7: LOAD TESTING

### 📊 Generate CPU Load

```bash
# SSH into EC2 instance
ssh -i "your-key.pem" ubuntu@<instance-ip>

# Install stress tool
sudo apt install stress -y

# Generate load (2 workers for 5 minutes)
stress --cpu 2 --timeout 300

# Monitor in real-time
htop
watch -n 1 'cat /proc/loadavg
```

## 📈 Scaling Policies Configuration


> When CPU usage exceeds 70%, the system automatically adds 1 instance.
> When CPU drops below 30%, it removes 1 instance

### 🚀 Scale-Out Policy

```yaml
Type: Simple Scaling
Metric: Average CPU Utilization
Threshold: >70% for 2 consecutive periods
Adjustment: +1 instance
```

### 🚀 Scale-In Policy

```yaml
Type: Simple Scaling
Metric: Average CPU Utilization
Threshold: <30% for 2 consecutive periods
Adjustment: -1 instance

```

---

## ⚡ How the Application Load Balancer Works

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/235224431-e8c8c12e-6826-47f1-89fb-2ddad83b3abf.gif" width="500">
</div>

The **Application Load Balancer (ALB)** operates at **Layer 7 (Application Layer)** and processes traffic using intelligent routing logic.

### 🔄 ALB Workflow
```bash
1️⃣ Listener → Receives incoming HTTP requests (Port 80)
2️⃣ Routing Rules → Evaluates host/path-based routing conditions
3️⃣ Target Group → Maintains list of healthy EC2 instances
4️⃣ Health Checks → Continuously monitors instance health (/)
5️⃣ Distribution → Routes traffic using round-robin algorithm
```


### 📊 Scaling Timeline

| ⏰ Time | 🖥️ CPU Utilization | ⚙️ Scaling Action | 📦 Instance Count |
|---------|--------------------|-------------------|-------------------|
| 00:00   | 15%                | No Action         | 2 |
| 00:05   | 85%                | Scale Out +1      | 3 |
| 00:10   | 92%                | Scale Out +1      | 4 |
| 00:15   | 75%                | No Action         | 4 |
| 00:20   | 25%                | Scale In -1       | 3 |
| 00:25   | 18%                | Scale In -1       | 2 |


### 🧠 Scaling Behavior Analysis

- System starts with **2 instances** (minimum capacity).
- When CPU exceeds **70%**, additional instances are launched.
- Peak load triggered scaling up to **4 instances**.
- When CPU dropped below **30%**, instances were automatically terminated.
- Infrastructure returned to baseline capacity (**2 instances**) for cost optimization.


### 🎯 Key Observations

- Elastic response to traffic spikes  
- Automatic cost control during low demand  
- Zero manual intervention required  
- Stable performance maintained under varying load  

---



# 🔐 Security Highlights

- Principle of Least Privilege (IAM Policies)
- Restricted inbound traffic (22 & 80 only)
- Health-based routing via ALB
- Version-controlled object storage
- Auto-healing infrastructure with ASG

---

# 🎯 Final Outcome

✔ Fault-Tolerant Architecture  
✔ Multi-AZ Deployment  
✔ Elastic Scaling  
✔ Production-Grade Security  
✔ Performance Tested Under Load  

---


<div align="center">

# 🌟 THANK YOU 🌟

<img src="https://user-images.githubusercontent.com/74038190/213910845-af37a709-8995-40d6-be59-724526e3c3d7.gif" width="300">

### 🚀 Production-Ready High Availability Architecture on AWS

</div>

---




