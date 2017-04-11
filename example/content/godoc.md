---
title: "GoDoc"
menu: 
    main:
        weight: 4
---

# lorhammer
--
# command
--
    import "lorhammer/src/lorhammer/command"


## Usage

```go
var LOG = logrus.WithField("logger", "lorhammer/command/in")
```

#### func  ApplyCmd

```go
func ApplyCmd(command model.CMD, mqtt tools.Mqtt, hostname string, prometheus tools.Prometheus)
```
# lora
--
    import "lorhammer/src/lorhammer/lora"


## Usage

```go
const (
	ProtocolVersion1 uint8 = 0x01
	ProtocolVersion2 uint8 = 0x02
)
```
Protocol versions

```go
var (
	ProtocolVersion byte = byte(2)
)
```

#### func  CalculateJoinRequestMIC

```go
func CalculateJoinRequestMIC(p lorawan.PHYPayload, key lorawan.AES128Key) ([]byte, error)
```

#### func  NewGateway

```go
func NewGateway(nbNode int, nsAddress string) *model.Gateway
```

#### func  NewJoinRequestPHYPayload

```go
func NewJoinRequestPHYPayload(appEUI lorawan.EUI64, devEUI lorawan.EUI64, appKey lorawan.AES128Key) lorawan.PHYPayload
```

#### func  NewNode

```go
func NewNode() *model.Node
```

#### func  RandomAES128Key

```go
func RandomAES128Key() lorawan.AES128Key
```

#### func  RandomEUI

```go
func RandomEUI() lorawan.EUI64
```

#### func  Start

```go
func Start(gateway *model.Gateway, prometheus tools.Prometheus)
```

#### type CFList

```go
type CFList [5]uint32
```

CFList represents a list of channel frequencies. Each frequency is in Hz and
must be multiple of 100, (since the frequency will be divided by 100 on
encoding), the max allowed value is 2^24-1 * 100.

#### func (CFList) MarshalBinary

```go
func (l CFList) MarshalBinary() ([]byte, error)
```
MarshalBinary marshals the object in binary form.

#### func (*CFList) UnmarshalBinary

```go
func (l *CFList) UnmarshalBinary(data []byte) error
```
UnmarshalBinary decodes the object from binary form.

#### type CompactTime

```go
type CompactTime time.Time
```

CompactTime implements time.Time but (un)marshals to and from ISO 8601 'compact'
format.

#### func (CompactTime) MarshalJSON

```go
func (t CompactTime) MarshalJSON() ([]byte, error)
```
MarshalJSON implements the json.Marshaler interface.

#### type DLSettings

```go
type DLSettings struct {
	RX2DataRate uint8
	RX1DROffset uint8
}
```

DLSettings represents the DLSettings fields (downlink settings).

#### func (DLSettings) MarshalBinary

```go
func (s DLSettings) MarshalBinary() ([]byte, error)
```
MarshalBinary marshals the object in binary form.

#### func (*DLSettings) UnmarshalBinary

```go
func (s *DLSettings) UnmarshalBinary(data []byte) error
```
UnmarshalBinary decodes the object from binary form.

#### type DatR

```go
type DatR struct {
	LoRa string
	FSK  uint32
}
```

DatR implements the data rate which can be either a string (LoRa identifier) or
an unsigned integer in case of FSK (bits per second).

#### type DataPayload

```go
type DataPayload struct {
	Bytes []byte
}
```

DataPayload represents a slice of bytes.

#### func (DataPayload) MarshalBinary

```go
func (p DataPayload) MarshalBinary() ([]byte, error)
```
MarshalBinary marshals the object in binary form.

#### func (*DataPayload) UnmarshalBinary

```go
func (p *DataPayload) UnmarshalBinary(uplink bool, data []byte) error
```
UnmarshalBinary decodes the object from binary form.

#### type DevAddr

```go
type DevAddr [4]byte
```

DevAddr represents the device address.

#### func (DevAddr) MarshalBinary

```go
func (a DevAddr) MarshalBinary() ([]byte, error)
```
MarshalBinary marshals the object in binary form.

#### func (DevAddr) MarshalText

```go
func (a DevAddr) MarshalText() ([]byte, error)
```
MarshalText implements encoding.TextMarshaler.

#### func (DevAddr) NwkID

```go
func (a DevAddr) NwkID() byte
```
NwkID returns the NwkID bits of the DevAddr.

#### func (*DevAddr) Scan

```go
func (a *DevAddr) Scan(src interface{}) error
```
Scan implements sql.Scanner.

#### func (DevAddr) String

```go
func (a DevAddr) String() string
```
String implements fmt.Stringer.

#### func (*DevAddr) UnmarshalBinary

```go
func (a *DevAddr) UnmarshalBinary(data []byte) error
```
UnmarshalBinary decodes the object from binary form.

#### func (*DevAddr) UnmarshalText

```go
func (a *DevAddr) UnmarshalText(text []byte) error
```
UnmarshalText implements encoding.TextUnmarshaler.

#### type JoinAcceptPayload

```go
type JoinAcceptPayload struct {
	AppNonce   [3]byte
	NetID      [3]byte
	DevAddr    DevAddr
	DLSettings DLSettings
	RXDelay    uint8 // 0=1s, 1=1s, 2=2s, ... 15=15s
	CFList     *CFList
}
```

JoinAcceptPayload represents the join-accept message payload.

#### func (JoinAcceptPayload) MarshalBinary

```go
func (p JoinAcceptPayload) MarshalBinary() ([]byte, error)
```
MarshalBinary marshals the object in binary form.

#### func (*JoinAcceptPayload) UnmarshalBinary

```go
func (p *JoinAcceptPayload) UnmarshalBinary(uplink bool, data []byte) error
```
UnmarshalBinary decodes the object from binary form.

#### type JoinRequestPayload

```go
type JoinRequestPayload struct {
	AppEUI   lorawan.EUI64
	DevEUI   lorawan.EUI64
	DevNonce [2]byte
}
```

JoinRequestPayload represents the join-request message payload.

#### func (JoinRequestPayload) MarshalBinary

```go
func (p JoinRequestPayload) MarshalBinary() ([]byte, error)
```
MarshalBinary marshals the object in binary form.

#### func (*JoinRequestPayload) UnmarshalBinary

```go
func (p *JoinRequestPayload) UnmarshalBinary(uplink bool, data []byte) error
```
UnmarshalBinary decodes the object from binary form.

#### type MHDR

```go
type MHDR struct {
	MType MType
	Major Major
}
```

MHDR represents the MAC header.

#### func (MHDR) MarshalBinary

```go
func (h MHDR) MarshalBinary() ([]byte, error)
```
MarshalBinary marshals the object in binary form.

#### func (*MHDR) UnmarshalBinary

```go
func (h *MHDR) UnmarshalBinary(data []byte) error
```
UnmarshalBinary decodes the object from binary form.

#### type MType

```go
type MType byte
```

MType represents the message type.

```go
const (
	JoinRequest MType = iota
	JoinAccept
	UnconfirmedDataUp
	UnconfirmedDataDown
	ConfirmedDataUp
	ConfirmedDataDown
	RFU
	Proprietary
)
```
Supported message types (MType)

#### type Major

```go
type Major byte
```

Major defines the major version of data message.

```go
const (
	LoRaWANR1 Major = 0
)
```
Supported major versions

#### type PHYPayload

```go
type PHYPayload struct {
	MHDR       MHDR
	MACPayload Payload
	MIC        [4]byte
}
```

PHYPayload represents the physical payload. Use NewPhyPayload for creating a new
PHYPayload.

#### func (*PHYPayload) UnmarshalBinary

```go
func (p *PHYPayload) UnmarshalBinary(data []byte) error
```
UnmarshalBinary decodes the object from binary form.

#### type Packet

```go
type Packet struct {
	Rxpk []Rxpk `json:"rxpk,omitempty"`
}
```


#### func (Packet) Prepare

```go
func (p Packet) Prepare(gateway *model.Gateway) ([]byte, error)
```

#### type PacketType

```go
type PacketType byte
```

PacketType defines the packet type.

```go
const (
	PushData PacketType = iota
	PushACK
	PullData
	PullResp
	PullACK
	TXACK
)
```
Available packet types

#### func  GetPacketType

```go
func GetPacketType(data []byte) (PacketType, error)
```

#### type Payload

```go
type Payload interface {
	MarshalBinary() (data []byte, err error)
	UnmarshalBinary(uplink bool, data []byte) error
}
```

Payload is the interface that every payload needs to implement. Since it might
be a MACPayload, an indication must be given if the direction is uplink or
downlink (it has different payloads for the same CID, based on direction).

#### type PullACKPacket

```go
type PullACKPacket struct {
	ProtocolVersion uint8
	RandomToken     uint16
}
```

PullACKPacket is used by the server to confirm that the network route is open
and that the server can send PULL_RESP packets at any time.

#### func (*PullACKPacket) UnmarshalBinary

```go
func (p *PullACKPacket) UnmarshalBinary(data []byte) error
```
UnmarshalBinary decodes the object from binary form.

#### type PullDataPacket

```go
type PullDataPacket struct {
	ProtocolVersion uint8
	RandomToken     uint16
	GatewayMAC      lorawan.EUI64
}
```

PullDataPacket is used by the gateway to pull data from the server.

#### func (PullDataPacket) MarshalBinary

```go
func (p PullDataPacket) MarshalBinary() ([]byte, error)
```
MarshalBinary marshals the object in binary form.

#### type PullRespPacket

```go
type PullRespPacket struct {
	ProtocolVersion uint8
	RandomToken     uint16
	Payload         PullRespPayload
}
```

PullRespPacket is used by the server to send RF packets and associated metadata
that will have to be emitted by the gateway.

#### func (PullRespPacket) MarshalBinary

```go
func (p PullRespPacket) MarshalBinary() ([]byte, error)
```
MarshalBinary marshals the object in binary form.

#### func (*PullRespPacket) UnmarshalBinary

```go
func (p *PullRespPacket) UnmarshalBinary(data []byte) error
```
UnmarshalBinary decodes the object from binary form.

#### type PullRespPayload

```go
type PullRespPayload struct {
	TXPK TXPK `json:"txpk"`
}
```

PullRespPayload represents the downstream JSON data structure.

#### type PushACKPacket

```go
type PushACKPacket struct {
	ProtocolVersion uint8
	RandomToken     uint16
}
```

PushACKPacket is used by the server to acknowledge immediately all the PUSH_DATA
packets received.

#### func (*PushACKPacket) UnmarshalBinary

```go
func (p *PushACKPacket) UnmarshalBinary(data []byte) error
```
UnmarshalBinary decodes the object from binary form.

#### type Rxpk

```go
type Rxpk struct {
	Time    string  `json:"time"`
	Tmst    int     `json:"tmst"`
	Freq    float64 `json:"freq"`
	Channel int     `json:"chan"`
	Rfch    int     `json:"rfch"`
	Stat    int     `json:"stat"`
	Modu    string  `json:"modu"`
	Datr    string  `json:"datr"`
	Codr    string  `json:"codr"`
	Rssi    int     `json:"rssi"`
	Lsnr    float64 `json:"lsnr"`
	Size    int     `json:"size"`
	Data    string  `json:"data"`
}
```


#### func  NewRxpk

```go
func NewRxpk(data []byte) Rxpk
```

#### type TXPK

```go
type TXPK struct {
	Imme bool         `json:"imme"`           // Send packet immediately (will ignore tmst & time)
	Tmst uint32       `json:"tmst,omitempty"` // Send packet on a certain timestamp value (will ignore time)
	Time *CompactTime `json:"time,omitempty"` // Send packet at a certain time (GPS synchronization required)
	Freq float64      `json:"freq"`           // TX central frequency in MHz (unsigned float, Hz precision)
	RFCh uint8        `json:"rfch"`           // Concentrator "RF chain" used for TX (unsigned integer)
	Powe uint8        `json:"powe"`           // TX output power in dBm (unsigned integer, dBm precision)
	Modu string       `json:"modu"`           // Modulation identifier "LORA" or "FSK"
	DatR DatR         `json:"datr"`           // LoRa datarate identifier (eg. SF12BW500) || FSK datarate (unsigned, in bits per second)
	CodR string       `json:"codr,omitempty"` // LoRa ECC coding rate identifier
	FDev uint16       `json:"fdev,omitempty"` // FSK frequency deviation (unsigned integer, in Hz)
	IPol bool         `json:"ipol"`           // Lora modulation polarization inversion
	Prea uint16       `json:"prea,omitempty"` // RF preamble size (unsigned integer)
	Size uint16       `json:"size"`           // RF packet payload size in bytes (unsigned integer)
	NCRC bool         `json:"ncrc,omitempty"` // If true, disable the CRC of the physical layer (optional)
	Data string       `json:"data"`           // Base64 encoded RF packet payload, padding optional
}
```

TXPK contains a RF packet to be emitted and associated metadata.
# scenario
--
    import "lorhammer/src/lorhammer/scenario"


## Usage

#### type Scenario

```go
type Scenario struct {
	Uuid     string
	Gateways []*model.Gateway

	ScenarioSleepTime [2]time.Duration
	GatewaySleepTime  [2]time.Duration
}
```


#### func  NewScenario

```go
func NewScenario(init model.Init) (*Scenario, error)
```

#### func (*Scenario) Cron

```go
func (p *Scenario) Cron(prometheus tools.Prometheus)
```

#### func (*Scenario) Stop

```go
func (p *Scenario) Stop(prometheus tools.Prometheus)
```
# model
--
    import "lorhammer/src/model"


## Usage

```go
const (
	JOIN_SCENARIO = "JoinScenario"
	SHUTDOWN      = "shutdown"
	STOP          = "stop"
	REGISTER      = "register"
	INIT          = "init"
	START         = "start"
)
```

#### type CMD

```go
type CMD struct {
	CmdName CommandName     `json:"cmd"`
	Payload json.RawMessage `json:"payload"`
}
```


#### type CommandName

```go
type CommandName string
```


#### type Gateway

```go
type Gateway struct {
	Nodes      []*Node
	NsAddress  string
	MacAddress lorawan.EUI64
}
```


#### type Init

```go
type Init struct {
	NsAddress         string    `json:"nsAddress"`
	NbGateway         int       `json:"nbGateway"`
	NbNode            [2]int    `json:"nbNodePerGateway"`
	ScenarioSleepTime [2]string `json:"scenarioSleepTime"`
	GatewaySleepTime  [2]string `json:"gatewaySleepTime"`
}
```


#### type JoinScenario

```go
type JoinScenario struct {
	CallBackTopic string `json:"callBackTopic"`
}
```


#### type Node

```go
type Node struct {
	AppKey        lorawan.AES128Key
	DevEUI        lorawan.EUI64
	AppEUI        lorawan.EUI64
	JoinedNetwork bool
}
```


#### type Register

```go
type Register struct {
	ScenarioUUID  string    `json:"scenarioid"`
	Gateways      []Gateway `json:"gateways"`
	CallBackTopic string    `json:"callBackTopic"`
}
```


#### type Start

```go
type Start struct {
	ScenarioUUID string `json:"scenarioid"`
}
```
# orchestrator
--
# checker
--
    import "lorhammer/src/orchestrator/checker"


## Usage

#### func  Check

```go
func Check(prometheusApiClient prometheus.ApiClient, checks []PrometheusCheck) ([]PrometheusCheckOk, []PrometheusCheckError)
```

#### type PrometheusCheck

```go
type PrometheusCheck struct {
	Description string  `json:"description"`
	Query       string  `json:"query"`
	ResultMin   float64 `json:"resultMin"`
	ResultMax   float64 `json:"resultMax"`
}
```


#### type PrometheusCheckError

```go
type PrometheusCheckError struct {
	Query  PrometheusCheck
	Val    float64
	Reason string
}
```


#### type PrometheusCheckOk

```go
type PrometheusCheckOk struct {
	Query PrometheusCheck
	Val   float64
}
```
# cli
--
    import "lorhammer/src/orchestrator/cli"


## Usage

```go
var LOG = logrus.WithField("logger", "orchestrator/cli/cli")
```

#### func  Start

```go
func Start(mqttClient tools.Mqtt, consulClient tools.Consul, prometheusApiClient prometheus.ApiClient)
```
# command
--
    import "lorhammer/src/orchestrator/command"


## Usage

```go
var LOG = logrus.WithField("logger", "orchestrator/command/in")
```

#### func  ApplyCmd

```go
func ApplyCmd(command model.CMD, mqtt tools.Mqtt, provision func(model.Register) error) error
```

#### func  LaunchScenario

```go
func LaunchScenario(mqttClient tools.Mqtt, init model.Init) error
```

#### func  ShutdownLorhammers

```go
func ShutdownLorhammers(mqttClient tools.Mqtt)
```

#### func  StopScenario

```go
func StopScenario(mqttClient tools.Mqtt)
```
# deploy
--
    import "lorhammer/src/orchestrator/deploy"


## Usage

```go
const (
	TypeNone    = "none"
	TypeDistant = "distant"
	TypeAmazon  = "amazon"
)
```

```go
var LOG = logrus.WithField("logger", "orchestrator/deploy/amazon")
```

#### func  Start

```go
func Start(model Model, consulClient tools.Consul) error
```

#### type Deployer

```go
type Deployer interface {
	RunBefore() error
	Deploy() error
	RunAfter() error
}
```


#### func  NewAmazonFromJson

```go
func NewAmazonFromJson(serialized json.RawMessage, consulClient tools.Consul) (Deployer, error)
```

#### func  NewDistantFromJson

```go
func NewDistantFromJson(serialized json.RawMessage) (Deployer, error)
```

#### type DistantRunError

```go
type DistantRunError struct {
	Errors []error
}
```


#### func (DistantRunError) Error

```go
func (distErr DistantRunError) Error() string
```

#### type Model

```go
type Model struct {
	Type   Type            `json:"type"`
	Config json.RawMessage `json:"config"`
}
```


#### type Type

```go
type Type string
```
# prometheus
--
    import "lorhammer/src/orchestrator/prometheus"


## Usage

#### type ApiClient

```go
type ApiClient interface {
	ExecQuery(query string) (float64, error)
}
```


#### func  NewApiClient

```go
func NewApiClient(consulClient tools.Consul) (ApiClient, error)
```

#### type ApiClientImpl

```go
type ApiClientImpl struct {
}
```


#### func (ApiClientImpl) ExecQuery

```go
func (p ApiClientImpl) ExecQuery(query string) (float64, error)
```
# provisioning
--
    import "lorhammer/src/orchestrator/provisioning"


## Usage

```go
var APP_ID = ""
```

```go
var CLEANED_PROVISIONING = false
```

```go
var LOG_LORASERVER = logrus.WithField("logger", "orchestrator/provisioning/loraserver")
```

```go
var LOG_SEMTECHV4 = logrus.WithFields(logrus.Fields{"logger": "orchestrator/provisioning/semtechv4"})
```

#### func  DeProvision

```go
func DeProvision(provisioning Model) error
```

#### func  Provision

```go
func Provision(provisioning Model, sensorsToRegister model.Register) error
```

#### type AsApp

```go
type AsApp struct {
	Name        string `json:"name"`
	Description string `json:"description"`
}
```


#### type AsNode

```go
type AsNode struct {
	DevEUI        string `json:"devEUI"`
	AppEUI        string `json:"appEUI"`
	AppKey        string `json:"appKey"`
	AdrInterval   int    `json:"adrInterval"`
	ApplicationID string `json:"applicationID"`
	Description   string `json:"description"`
	Name          string `json:"name"`
	Rx1DROffset   int    `json:"rx1DROffset"`
	Rx2DR         int    `json:"rx2DR"`
	RxDelay       int    `json:"rxDelay"`
	RxWindow      string `json:"rxWindow"`
}
```


#### type Command

```go
type Command struct {
	Command string `json:"command"`
	Ackreq  int    `json:"ackreq"`
}
```


#### type Config

```go
type Config struct {
	NsAddress string `json:"nsAddress"`
	AsAddress string `json:"asAddress"`
	CsAddress string `json:"csAddress"`
	NcAddress string `json:"ncAddress"`
}
```


#### type CreationResponse

```go
type CreationResponse struct {
	Id string `json:"id"`
}
```


#### type Loraserver

```go
type Loraserver struct{}
```


#### func (Loraserver) DeProvision

```go
func (_ Loraserver) DeProvision(rawConfig json.RawMessage) error
```

#### func (Loraserver) GetType

```go
func (_ Loraserver) GetType() Type
```

#### func (Loraserver) Provision

```go
func (_ Loraserver) Provision(sensorsToRegister model.Register, rawConfig json.RawMessage) error
```

#### type Model

```go
type Model struct {
	Type   Type            `json:"type"`
	Config json.RawMessage `json:"config"`
}
```


#### type None

```go
type None struct{}
```


#### func (None) DeProvision

```go
func (_ None) DeProvision(config json.RawMessage) error
```

#### func (None) GetType

```go
func (_ None) GetType() Type
```

#### func (None) Provision

```go
func (_ None) Provision(sensorsToRegister model.Register, config json.RawMessage) error
```

#### type SemtechV4

```go
type SemtechV4 struct{}
```


#### func (SemtechV4) DeProvision

```go
func (_ SemtechV4) DeProvision(rawConfig json.RawMessage) error
```

#### func (SemtechV4) GetType

```go
func (_ SemtechV4) GetType() Type
```

#### func (SemtechV4) Provision

```go
func (_ SemtechV4) Provision(sensorsToRegister model.Register, rawConfig json.RawMessage) error
```

#### type Type

```go
type Type string
```
# testSuite
--
    import "lorhammer/src/orchestrator/testSuite"


## Usage

```go
var LOG = logrus.WithField("logger", "orchestrator/testSuite/test")
```

#### func  FromFile

```go
func FromFile(configFile []byte) ([]TestSuite, error)
```

#### func  WriteFile

```go
func WriteFile(testReport *TestReport, pathReportFile string) error
```

#### type Ramp

```go
type Ramp struct {
}
```


#### func  NewRamp

```go
func NewRamp(nbGateway int, nbLorhammer int, duration time.Duration) (*Ramp, error)
```

#### func (*Ramp) NextTick

```go
func (ramp *Ramp) NextTick() int
```

#### func (*Ramp) WillLaunch

```go
func (ramp *Ramp) WillLaunch() bool
```

#### type TestReport

```go
type TestReport struct {
	StartDate          time.Time                      `json:"startDate"`
	EndDate            time.Time                      `json:"endDate"`
	Input              *TestSuite                     `json:"input"`
	ChecksSuccess      []checker.PrometheusCheckOk    `json:"checksSuccess"`
	ChecksError        []checker.PrometheusCheckError `json:"checksError"`
	GrafanaSnapshotUrl string                         `json:"grafanaSnapshotUrl"`
}
```


#### func  LaunchTest

```go
func LaunchTest(consulClient tools.Consul, mqttClient tools.Mqtt, test *TestSuite, prometheusApiClient prometheus.ApiClient, grafanaClient *tools.GrafanaClient) *TestReport
```

#### type TestSuite

```go
type TestSuite struct {
	TestType                 TestType                  `json:"testType"`
	RampTime                 time.Duration             `json:"rampTime"`
	RepeatTime               time.Duration             `json:"repeatTime"`
	StopAllLorhammerTime     time.Duration             `json:"stopAllLorhammerTime"`
	ShutdownAllLorhammerTime time.Duration             `json:"shutdownAllLorhammerTime"`
	Init                     model.Init                `json:"init"`
	PrometheusCheck          []checker.PrometheusCheck `json:"prometheusCheck"`
	Provisioning             provisioning.Model        `json:"provisioning"`
	Deploy                   deploy.Model              `json:"deploy"`
}
```

Describe a test to execute scenarios

#### type TestType

```go
type TestType string
```


```go
const (
	TestTypeNone    TestType = "none"
	TestTypeOneShot TestType = "oneShot"
	TestTypeRamp    TestType = "ramp"
	TestTypeRepeat  TestType = "repeat"
)
```

#### func (*TestType) UnmarshalJSON

```go
func (testType *TestType) UnmarshalJSON(b []byte) error
```
# tools
--
    import "lorhammer/src/tools"


## Usage

```go
var (
	MQTT_START_TOPIC        = "/lorhammer"
	MQTT_INIT_TOPIC         = "/lorhammer/all"
	MQTT_ORCHESTRATOR_TOPIC = "/lorhammer/orchestrator"
)
```

```go
var LOG = logrus.WithField("logger", "tools/consul/init")
```

```go
var LOG_GRAFANA = logrus.WithField("logger", "tools/grafana")
```

#### func  DetectIp

```go
func DetectIp(localIp string) (string, error)
```

#### func  FreeTcpPort

```go
func FreeTcpPort() (int, error)
```

#### func  Hostname

```go
func Hostname(ip string, port int) (string, error)
```

#### func  Random

```go
func Random(min, max int) int
```

#### func  RandomBytes

```go
func RandomBytes(nb int) []byte
```

#### func  RandomDuration

```go
func RandomDuration(min, max time.Duration) time.Duration
```

#### type Consul

```go
type Consul interface {
	GetAddress() string
	Register(ip string, hostname string, httpPort int) error
	Service(name string) ([]*consul.ServiceEntry, error)
	ServiceFirst(name string, prefix string) (string, error)
	DeRegister(string) error
	AllServices() ([]*consul.CatalogService, error)
}
```


#### func  NewConsul

```go
func NewConsul(consulAddress string) (Consul, error)
```

#### type GrafanaClient

```go
type GrafanaClient struct {
}
```


#### func  NewGrafana

```go
func NewGrafana(auth string, consulClient Consul) (*GrafanaClient, error)
```

#### func (*GrafanaClient) MakeSnapshot

```go
func (grafana *GrafanaClient) MakeSnapshot(startTime time.Time, endTime time.Time) (string, error)
```

#### type Mqtt

```go
type Mqtt interface {
	HandleCmd(topics []string, handle func(cmd model.CMD)) error
	PublishCmd(topic string, cmdName model.CommandName) error
	PublishSubCmd(topic string, cmdName model.CommandName, subCmd interface{}) error
}
```


#### func  NewMqtt

```go
func NewMqtt(hostname string, consulClient Consul) (Mqtt, error)
```

#### type Prometheus

```go
type Prometheus interface {
	StartTimer() func()
	AddGateway(nb int)
	SubGateway(nb int)
	AddNodes(nb int)
	SubNodes(nb int)
	AddLongRequest(nb int)
}
```


#### func  BuildPrometheus

```go
func BuildPrometheus() Prometheus
```
